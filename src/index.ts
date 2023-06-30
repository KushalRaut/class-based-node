import * as dotenv from "dotenv";
dotenv.config();
import appConfig from "./config/appConfig";
import app from "./config/express";
import chalk from "chalk";
import { connect } from "./config/dbconfig";

app.listen(appConfig.port, () => {
  connect();
  console.log(chalk.yellow(`Server running on port ${appConfig.port}`));
});
