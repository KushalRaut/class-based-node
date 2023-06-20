import todoModel from "./todoModel";
import { TodoService, ITodoAbstract } from "./todoService";
import TodoController from "./todoController";

const todoService: ITodoAbstract = new TodoService(todoModel);
const todoController = new TodoController();

export { todoService, todoController };
