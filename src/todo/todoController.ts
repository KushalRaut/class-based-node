import express from "express";
import { todoService } from ".";

class TodoController {
  async createTodo(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const todo = req.body;
      const newTodo = await todoService.createTodo(todo);
      res.status(201).json(newTodo);
    } catch (err) {
      next(err);
    }
  }

  async getTodos(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const todos = await todoService.getTodos();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  }

  async getTodoById(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const todoId = req.params.todoId;
      const todo = await todoService.getTodoById(todoId);
      res.status(200).json(todo);
    } catch (err) {
      next(err);
    }
  }

  async updateTodoById(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const todoId = req.params.todoId;
      const todoUpdate = req.body;
      const updatedTodo = await todoService.updateTodoById(todoId, todoUpdate);
      res.status(200).json(updatedTodo);
    } catch (err) {
      next(err);
    }
  }

  async deleteTodoById(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const todoId = req.params.todoId;
      const deletedTodo = await todoService.deleteTodoById(todoId);
      res.status(200).json(deletedTodo);
    } catch (err) {
      next(err);
    }
  }
}

export default TodoController;
