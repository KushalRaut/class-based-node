import appConfig from "./appConfig";
const chalk = require("chalk");
const mongoose = require("mongoose");

export async function connect() {
  mongoose
    .connect(appConfig.db)
    .then(() => {
      console.log(chalk.bgGreen.bold("Successfully connected to MongoDB"));
    })
    .catch((error: any) => {
      console.log(chalk.bgRed.bold("Could not connect to MongoDB"));
      console.log(error);
    });
}
