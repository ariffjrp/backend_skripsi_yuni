const swaggerJSDoc = require('swagger-jsdoc');
const version = require('../../package.json');

const address = 'localhost';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Artikel',
    ...version,
    description: 'Documentation for Artikel',
  },
  servers: [
    {
      url: `http://${address}:${process.env.SERVER_PORT}`,
      description: 'Development Artikel',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.js'],
};

exports.swaggerSpec = swaggerJSDoc(options);
