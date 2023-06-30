"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const todoRouter = express_1.default.Router();
todoRouter.post("/", _1.todoController.createTodo);
todoRouter.get("/", _1.todoController.getTodos);
todoRouter.get("/:todoId", _1.todoController.getTodoById);
todoRouter.put("/:todoId", _1.todoController.updateTodoById);
todoRouter.delete("/:todoId", _1.todoController.deleteTodoById);
exports.default = todoRouter;
