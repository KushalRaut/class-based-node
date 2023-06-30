"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routeconfig_1 = __importDefault(require("./routeconfig"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", routeconfig_1.default);
app.use((err, req, res, next) => {
    if (err.code == undefined) {
        err.code = 500;
    }
    return res.status(err.code).json({ message: err.message });
});
exports.default = app;
