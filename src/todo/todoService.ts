import { ITodo } from "./todoModel";

export interface ITodoAbstract {
  createTodo(todo: any): Promise<ITodo>;
  getTodos(): Promise<ITodo[]>;
  getTodoById(todoId: string): Promise<ITodo>;
  updateTodoById(todoId: string, todo: any): Promise<ITodo>;
  deleteTodoById(todoId: string): Promise<ITodo>;
}

export class TodoService implements ITodoAbstract {
  private model;

  constructor(model: any) {
    this.model = model;
  }

  async createTodo(todo: any): Promise<ITodo> {
    const newTodo = new this.model(todo);
    return await newTodo.save();
  }

  async getTodos(): Promise<ITodo[]> {
    return await this.model.find({});
  }

  async getTodoById(todoId: string): Promise<ITodo> {
    const todo = await this.model.findById(todoId);
    if (!todo) {
      throw new Error("Todo not found");
    }
    return todo;
  }

  async updateTodoById(todoId: string, todo: any): Promise<ITodo> {
    const updatedTodo = await this.model.findByIdAndUpdate(todoId, todo, {
      new: true,
    });
    if (!updatedTodo) {
      throw new Error("Todo not found");
    }
    return updatedTodo;
  }

  async deleteTodoById(todoId: string): Promise<ITodo> {
    const deletedTodo = await this.model.findByIdAndRemove(todoId);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }
    return deletedTodo;
  }
}
