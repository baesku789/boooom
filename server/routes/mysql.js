var mysql = require("mysql");
// DB 설정정보
var connection = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "boomting",
  port: "3306",
});

module.exports = connection;
