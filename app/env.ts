import { error } from "console";

if(!process.env.CAT_API_KEY) {
  throw error("環境変数CAT_API_KEY が設定されていません");
}
export const CAT_API_KEY = process.env.CAT_API_KEY;
