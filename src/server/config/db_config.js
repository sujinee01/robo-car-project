/* 
 DB연결 설정하는 JS 파일
*/

const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "robocar",
});

module.exports = db;
