import { error } from "console";

if(!process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY) {
  throw error("環境変数CAT_API_KEY が設定されていません");
}
export const CAT_API_KEY = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY;
