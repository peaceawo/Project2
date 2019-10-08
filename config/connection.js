var mysql = require("mysql");
var Sequelize = require("sequelize");
require("dotenv").config();

var mysql = require("mysql");
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "blogger"
  });
}
// Make connection.
connection.connect();

module.exports = connection;

//Create Connection to database with Sequelize

var sequelize = new Sequelize("blogger", "root", process.env.DB_PASS, {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

//export object
module.exports = sequelize;
