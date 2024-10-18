const app = require('./app');
const port = app.get('port');

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Configuração do Swagger 
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Api do Unimaps",
            version: "1.0.0",
            description: "API CRUD para gerenciar rotas",
        },
        servers: [{ url: `http://localhost:${port}` }]
    },
    apis: [`${__dirname}/routes/*.js`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => console.log(`Run on port ${port}!`));
