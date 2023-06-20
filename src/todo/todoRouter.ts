import express from "express";
import { todoController } from ".";

const todoRouter = express.Router();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodos);
todoRouter.get("/:todoId", todoController.getTodoById);
todoRouter.put("/:todoId", todoController.updateTodoById);
todoRouter.delete("/:todoId", todoController.deleteTodoById);

export default todoRouter;
