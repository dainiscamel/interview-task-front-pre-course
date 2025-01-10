import { TodoApi } from "@/api";
import { ToDoDto, ToDoRequest } from "@/types/api";

export const TODO_API = "http://localhost:5173/api";

export const getTodosRoute = () => "/todos";
export const getTodoRoute = (id: number) => `/todos/${id}`;

export const getTodos = async (page: number = 1) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const response = await TodoApi(getTodosRoute());
  const { data } = await response.json();

  const pageSize = 5;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    todos: data.slice(start, end),
    hasMore: end < data.length,
    totalItems: data.length,
  };
};

export const getTodoById = async (id: number) => {
  const response = await TodoApi(getTodoRoute(id));
  const { data } = await response.json();
  return data;
};

export const createTodo = async (todo: ToDoDto) => {
  const response = await TodoApi(getTodosRoute(), {
    method: "POST",
    body: JSON.stringify(todo),
  });

  const { data } = await response.json();
  return {
    ok: response.ok,
    data,
  };
};

export const deleteTodo = async (id: number) => {
  const response = await TodoApi(getTodoRoute(id), {
    method: "DELETE",
  });
  const { data } = await response.json();
  return data;
};
