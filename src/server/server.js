/*
 DB 연결 등 서버에 관련된 JS 파일입니다.
*/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000; // 포트번호 지정
const db = require("./config/db_config.js"); // DB 설정파일

// JSON 형식의 요청 데이터 파싱 설정
app.use(express.json());

// URL-encoded 형식의 요청 데이터 파싱 설정
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("localhost/");
});

app.post("/Join", (req, res) => {
  console.log("/join 요청됨");
  const body = req.body;

  const paramName = body.name || req.query.name;
  const paramId = body.id || req.query.id;
  const paramPassword = body.password || req.query.password;
  const paramEmail = body.email || req.query.email;
  const paramPhone = body.phone || req.query.phone;
  const paramAddr1 = body.addr1 || req.query.addr1;
  const paramAddr2 = body.addr2 || req.query.addr2;
  const paramOffice = body.office || req.query.office;
  const paramAddr = paramAddr1 + paramAddr2;

  console.log([
    paramName,
    paramId,
    paramPassword,
    paramPhone,
    paramEmail,
    paramAddr1,
    paramAddr2,
    paramAddr,
    paramOffice,
  ]);

  db.getConnection((err, conn) => {
    console.log("회원가입 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    const sql =
      "INSERT INTO user(u_name, u_id, u_pw, u_phone, u_email, u_addr, u_office) VALUES(?, ?, ?, ?, ?, ?, ?)";
    const params = [
      paramName,
      paramId,
      paramPassword,
      paramPhone,
      paramEmail,
      paramAddr,
      paramOffice,
    ];

    conn.query(sql, params, (err, result, fields) => {
      // console.log('실행쿼리: ' + sql);
      if (err) {
        console.log("쿼리 실행 실패:");
        console.dir(err);
        res.status(500).json({ success: false, message: "쿼리 실행 실패" });
        return;
      }
      if (result) {
        console.log(result);
        console.log("사용자 추가 성공");
        res.status(200).json({ success: true, message: "사용자 추가 성공" });
      } else {
        res.status(500).json({ success: false, message: "사용자 추가 실패" });
      }
    });

    conn.release();
  });
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}`);
});
