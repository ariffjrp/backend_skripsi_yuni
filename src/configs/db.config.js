const Sequelize = require('sequelize');
const config = require('./config.json');

let env = process.env.NODE_ENV;
if (!env) {
  env = 'development';
}

console.info('Running in', env, 'mode');

let sequelize;

if (process.env.DB_URL) {
  // Connection menggunakan DB_URL
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',  // Ganti dengan dialek yang sesuai dengan DBMS kamu
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // Sesuaikan dengan kebutuhan SSL
        rejectUnauthorized: false // Sesuaikan dengan kebutuhan keamanan SSL
      }
    }
  });
} else {
  // Fallback ke konfigurasi individual, tidak digunakan di Railway.
  // Pastikan untuk menghapus atau tidak menyertakan bagian ini jika tidak digunakan sama sekali di produksi.
  sequelize = new Sequelize(
    process.env.DB_DATABASE || config[env].database,
    process.env.DB_USER || config[env].username,
    process.env.DB_PASSWORD || config[env].password,
    {
      host: process.env.DB_HOST || config[env].host,
      port: process.env.DB_PORT || config[env].port,
      dialect: config[env].dialect,
      logging: false,
    },
  );
}

module.exports = sequelize;
