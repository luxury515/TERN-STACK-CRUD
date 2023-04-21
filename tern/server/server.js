const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 4000;

// Cross-Origin Resource Sharing(CORS) 설정
app.use(cors());

// JSON 데이터 파싱
app.use(express.json());

// 라우터 등록
app.use(require("./routes/record"));

// 드라이버 연결
const dbo = require("./db/conn");

// 서버 실행
app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
