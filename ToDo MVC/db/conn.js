const { Sequelize } = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    localhost: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
  },
);

try {
  sequelize.authenticate();
  console.log('Authenthicate sucessfull');
} catch (err) {
  console.log(`Não foi possível se conectar ${err}`);
}

module.exports = sequelize;
