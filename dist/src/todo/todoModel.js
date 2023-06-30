"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Todo = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model("Todo", Todo);
