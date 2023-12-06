const { v4: uuidv4 } = require("uuid");
let items = require("../items");

const getItems = (req, res) => {
  res.send(items);
};

const getOneItem = (req, res) => {
  const item = items.find((item) => item.id === id);
  res.send(item);
};

const addItem = (req, res) => {
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };
  items = [...items, item];

  res.code(201).send(item);
};

const deleteItem = (req, res) => {
  const { id } = req.params;

  items = items.filter((item) => item.id !== id);

  res.send({ message: `Item ${id} has been deleted` });
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Find the index of the item with the given id
  const index = items.findIndex((item) => item.id === id);

  // If the item is not found, return a 404 Not Found response
  if (index === -1) {
    return res.code(404).send({ message: `Item ${id} not found` });
  }

  // Update the item at the found index
  items[index] = { id, name };

  // Return the updated item
  res.send(items[index]);
};

module.exports = { getItems, getOneItem, addItem, deleteItem, updateItem };
