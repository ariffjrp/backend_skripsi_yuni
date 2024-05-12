require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const dbSync = require('./utils/dbsync');
const db = require('./models');
const { swaggerSpec } = require('./utils/swagger')

const app = express();

const corsOptions = {
  origin: ['http://localhost:8081', 'http://localhost:8080'],
  credentials: true, 
};
  
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());

app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true }));

app.use('/docs', cors(corsOptions), swaggerUI.serve, swaggerUI.setup(swaggerSpec));

require('./routes/artikel.route')(app);

if (process.env.NODE_ENV === 'development') {
    db.sequelize.sync();
} else {
  dbSync();
}
  
const PORT = process.env.SERVER_PORT || 8080;
  
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
  
module.exports = app;