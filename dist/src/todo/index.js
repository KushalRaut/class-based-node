"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = exports.todoService = void 0;
const todoModel_1 = __importDefault(require("./todoModel"));
const todoService_1 = require("./todoService");
const todoController_1 = __importDefault(require("./todoController"));
const todoService = new todoService_1.TodoService(todoModel_1.default);
exports.todoService = todoService;
const todoController = new todoController_1.default();
exports.todoController = todoController;
