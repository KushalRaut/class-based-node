"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const appConfig_1 = __importDefault(require("./appConfig"));
const chalk = require("chalk");
const mongoose = require("mongoose");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose
            .connect(appConfig_1.default.db)
            .then(() => {
            console.log(chalk.bgGreen.bold("Successfully connected to MongoDB"));
        })
            .catch((error) => {
            console.log(chalk.bgRed.bold("Could not connect to MongoDB"));
            console.log(error);
        });
    });
}
exports.connect = connect;
