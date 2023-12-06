const fastify = require("fastify")({ logger: true });
const PORT = 5000;

// fastify.register(require("@fastify/swagger"), {
//   exposeRoute: true,
//   routePrefix: "/docs",
//   swagger: {
//     info: {
//       title: "fastify-api",
//     },
//   },
// });

// Use the updated version of fastify-static
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
