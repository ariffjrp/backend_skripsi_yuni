require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbSync = require('./utils/dbsync');
const db = require('./models');

const app = express();

const corsOptions = {
    origin: process.env.CORS_PORT,
};
  
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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