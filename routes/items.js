const {
  getOneItem,
  getItems,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/items");

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

const getAllOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getOneItem,
};

const addItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, opt, done) {
  // GET ALL ITEMS
  fastify.get("/items", getAllOpts);

  //   GET SINGLE ITEMS
  fastify.get("/items/:id", getItemOpts);

  //   ADD ITEM
  fastify.post("/items", addItemOpts);

  // DELETE ITEM
  fastify.delete("/items/:id", deleteItemOpts);

  // UPDATE ITEM
  fastify.put("/items/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
