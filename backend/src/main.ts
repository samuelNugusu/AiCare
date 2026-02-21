import app from "./app";
import { env } from "./config/env";

console.log("⏳ Starting AiCare backend...");

app.listen(env.PORT, () => {
  console.log(`🚀 AiCare Backend running on port ${env.PORT}`);
});