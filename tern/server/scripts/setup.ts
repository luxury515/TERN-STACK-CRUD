import { Tigris } from "@tigrisdata/core";
import { Record } from "../db/record";

import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

async function main() {
  // Tigris 클라이언트 설정
  const tigrisClient = new Tigris();
  // 브랜치가 없으면 동적으로 생성
  await tigrisClient.getDatabase().initializeBranch();
  // 스키마 등록
  await tigrisClient.registerSchemas([Record]);
}

main()
  .then(async () => {
    console.log("Setup complete ...");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
