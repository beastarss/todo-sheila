const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Todo List API",
      version: "1.0.0",
      description:
        "Dokumentasi API Todo List — dibangun bertahap dari seri artikel backend Node.js",
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
      {
        url: "https://todo-api-26zq.vercel.app", // Disesuaikan dengan domain Vercel Anda saat ini
        description: "Production server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },

        apiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },

      schemas: {
        Todo: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "665f1c2e8b1e2a1a2c3d4e5f",
            },

            title: {
              type: "string",
              example: "Belajar Swagger",
            },

            description: {
              type: "string",
              example: "Menulis dokumentasi endpoint todo",
            },

            completed: {
              type: "boolean",
              example: false,
            },

            owner: {
              type: "string",
              example: "665f1a2b8b1e2a1a2c3d1111",
            },

            createdAt: {
              type: "string",
              format: "date-time",
            },

            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
      },
    },
  },

  // Pastikan path ini sesuai: 
  // Jika swagger.js ada di folder config/, gunakan "../routes/*.routes.js"
  // Jika swagger.js ada langsung di folder src/, gunakan "./routes/*.routes.js"
  apis: [path.join(__dirname, "../routes/*.routes.js")],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;