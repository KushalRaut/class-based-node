import * as dotenv from "dotenv";
dotenv.config();
import appConfig from "./config/appConfig";
import app from "./config/express";
import mongooseDb from "./config/dbconfig";
import chalk from "chalk";

app.listen(appConfig.port, () => {
  mongooseDb.connect();
  console.log(chalk.yellow(`Server running on port ${appConfig.port}`));
});
