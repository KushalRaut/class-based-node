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
exports.TodoService = void 0;
class TodoService {
    constructor(model) {
        this.model = model;
    }
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqTodo = new this.model(todo);
            const newTodo = yield reqTodo.save();
            return newTodo;
        });
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const allTodos = yield this.model.find({});
            return allTodos;
        });
    }
    getTodoById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.model.findById(todoId);
            if (!todo) {
                throw new Error("Todo not found");
            }
            return todo;
        });
    }
    updateTodoById(todoId, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTodo = yield this.model.findByIdAndUpdate(todoId, todo, {
                new: true,
            });
            if (!updatedTodo) {
                throw new Error("Todo not found");
            }
            return updatedTodo;
        });
    }
    deleteTodoById(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTodo = yield this.model.findByIdAndRemove(todoId);
            if (!deletedTodo) {
                throw new Error("Todo not found");
            }
            return deletedTodo;
        });
    }
}
exports.TodoService = TodoService;
