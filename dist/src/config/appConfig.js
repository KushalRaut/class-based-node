"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000,
    env: (_b = process.env.NODE_ENV) !== null && _b !== void 0 ? _b : "development",
    db: process.env.MONGO_URI,
};
exports.default = appConfig;
