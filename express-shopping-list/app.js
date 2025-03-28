// app.js
const express = require('express');
const itemsModule = require('./items');

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/items', router);


// 1. GET /items
router.get('/', (req, res) => {
  res.json(itemsModule.getItems());
});

// 2. POST /items
router.post('/', (req, res) => {
  const newItem = req.body;
  itemsModule.addItem(newItem);
  res.json({ added: newItem });
});

// 3. GET /items/:name
router.get('/:name', (req, res) => {
  const item = itemsModule.getItems().find(item => item.name === req.params.name);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// 4. PATCH /items/:name
router.patch('/:name', (req, res) => {
  itemsModule.updateItem(req.params.name, req.body);
  const updatedItem = itemsModule.getItems().find(item => item.name === req.body.name);
  if (updatedItem) {
    res.json({ updated: updatedItem });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// 5. DELETE /items/:name
router.delete('/:name', (req, res) => {
    const item = itemsModule.getItems().find(item => item.name === req.params.name);
    if (item) {
      itemsModule.removeItem(req.params.name);
      res.json({ message: "Deleted" });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; 