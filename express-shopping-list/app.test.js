const request = require('supertest');
const app = require('./app');
const itemsModule = require('./items');

describe('Shopping List API', () => {
  beforeEach(() => {
    // Reset items before each test
    itemsModule.setItems([]);
  });

  describe('GET /items', () => {
    test('Should return an empty array', async () => {
      const response = await request(app).get('/items');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });

    test('Should return the list of items', async () => {
        const items = [{ name: "popsicle", price: 1.45 }, { name: "cheerios", price: 3.40 }];
        items.forEach(item => itemsModule.addItem(item));
        const response = await request(app).get('/items');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(items);
    });
  });

  describe('POST /items', () => {
    test('Should add an item to the list', async () => {
      const response = await request(app)
        .post('/items')
        .send({ name: "popsicle", price: 1.45 });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ added: { name: "popsicle", price: 1.45 } });
      expect(itemsModule.getItems()).toContainEqual({ name: "popsicle", price: 1.45 });
    });
  });

  describe('GET /items/:name', () => {
    test('Should get an item by name', async () => {
      itemsModule.addItem({ name: "popsicle", price: 1.45 });
      const response = await request(app).get('/items/popsicle');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ name: "popsicle", price: 1.45 });
    });

    test('Should return 404 if item not found', async () => {
      const response = await request(app).get('/items/nonexistent');
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Item not found' });
    });
  });

  describe('PATCH /items/:name', () => {
    test('Should update an existing item', async () => {
      itemsModule.addItem({ name: "popsicle", price: 1.45 });
      const response = await request(app)
        .patch('/items/popsicle')
        .send({ name: "new popsicle", price: 2.45 });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ updated: { name: "new popsicle", price: 2.45 } });
      expect(itemsModule.getItems()).toContainEqual({ name: "new popsicle", price: 2.45 });
    });

    test('Should return 404 if item not found', async () => {
      const response = await request(app)
        .patch('/items/nonexistent')
        .send({ name: "new item", price: 5.00 });
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Item not found' });
    });
  });

  describe('DELETE /items/:name', () => {
    test('Should delete an item', async () => {
      itemsModule.addItem({ name: "popsicle", price: 1.45 });
      const response = await request(app).delete('/items/popsicle');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: "Deleted" });
      expect(itemsModule.getItems()).not.toContainEqual({ name: "popsicle", price: 1.45 });
    });

    test('Should return 404 if item not found', async () => {
      const response = await request(app).delete('/items/nonexistent');
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Item not found' });
    });
  });
});