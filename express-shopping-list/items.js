let items = [];

const itemsModule = {
  getItems: () => items,
  setItems: (newItems) => { items = newItems; },
  addItem: (item) => items.push(item),
  removeItem: (name) => items = items.filter(item => item.name !== name),
  updateItem: (name, update) => {
    const index = items.findIndex(item => item.name === name);
    if (index !== -1) {
      items[index] = { ...items[index], ...update };
    }
  }
};

module.exports = itemsModule;