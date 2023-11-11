const Sequelize = require("sequelize");
const sequelize = new Sequelize(
   'vendcom',
   'vendcom_copy',
   'ukbd@220787M',
    {
      host: '165.232.177.23',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});