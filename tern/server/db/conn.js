const { Tigris } = require("@tigrisdata/core");

// TigrisDB 연결용 모듈

const client = new Tigris();

var _db;

module.exports = {
  // TigrisDB에 연결하는 함수
  connectToServer: async function (callback) {
    try {
      _db = await client.getDatabase();
      console.log("TigrisDB에 성공적으로 연결되었습니다.");
      return callback();
    } catch (err) {
      return callback(err);
    }
  },

  // 현재 연결된 TigrisDB를 반환하는 함수
  getDb: function () {
    return _db;
  },
};
