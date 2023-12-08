const fastify = require("fastify")({ logger: true });
const PORT = 5000;

fastify.register(require("@fastify/static"), {
  root: __dirname,
});

fastify.register(require("./routes/items"));

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit();
  }
};

start();
