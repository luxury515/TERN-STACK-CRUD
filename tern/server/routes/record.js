const express = require("express");

// recordRoutes는 express router의 인스턴스이며 라우트를 정의하는 데 사용된다.
// 라우터는 미들웨어로 추가되며 경로가 /record로 시작하는 요청을 처리한다.
const recordRoutes = express.Router();

// 이 부분은 데이터베이스에 연결하는 데 도움이 된다.
const dbo = require("../db/conn");

// 이 부분은 모든 레코드의 목록을 가져올 수 있도록 도와준다.
recordRoutes.route("/record").get(async function (req, res) {
  let db_connect = dbo.getDb();
  const result = await db_connect.getCollection("records").findMany().toArray();

  return res.json(result);
});

// 이 부분은 id를 사용하여 단일 레코드를 가져올 수 있도록 도와준다.
recordRoutes.route("/record/:id").get(async function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { filter: { _id: req.params.id } };
  const result = await db_connect.getCollection("records").findOne(myquery);

  return res.json(result);
});

// 이 부분은 새 레코드를 만드는 데 도움이 된다.
recordRoutes.route("/record/add").post(async function (req, res) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };

  const result = await db_connect.getCollection("records").insertOne(myobj);
  res.json(result);
});

// 이 부분은 id를 사용하여 레코드를 업데이트하는 데 도움이 된다.
recordRoutes.route("/update/:id").post(async function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {
    filter: { _id: req.params.id },
    fields: {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    },
  };
  const result = await db_connect.getCollection("records").updateOne(myquery);

  console.log("1 document updated");
  res.json(result);
});

// 이 부분은 레코드를 삭제하는 데 도움이 된다.
recordRoutes.route("/:id").delete(async (req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { filter: { _id: req.params.id } };
  const result = await db_connect.getCollection("records").deleteOne(myquery);

  res.json(result);
});

module.exports = recordRoutes;
