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
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class TodoController {
    createTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todo = req.body;
                const newTodo = yield _1.todoService.createTodo(todo);
                res.status(201).json(newTodo);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getTodos(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield _1.todoService.getTodos();
                res.status(200).json(todos);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getTodoById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.todoId;
                const todo = yield _1.todoService.getTodoById(todoId);
                res.status(200).json(todo);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateTodoById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.todoId;
                const todoUpdate = req.body;
                const updatedTodo = yield _1.todoService.updateTodoById(todoId, todoUpdate);
                res.status(200).json(updatedTodo);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteTodoById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoId = req.params.todoId;
                const deletedTodo = yield _1.todoService.deleteTodoById(todoId);
                res.status(200).json(deletedTodo);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = TodoController;
