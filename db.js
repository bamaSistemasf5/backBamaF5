import { Sequelize } from 'sequelize';
// import mysql2 from 'mysql2';

const db = new Sequelize("bamasdb", "admin", "12345678", {
  host: 'bamas-db.cleakkeom0pm.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialect: "mysql",
  // dialectModule: mysql2, // 
});

export default db;