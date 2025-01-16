import { http, HttpResponse, PathParams } from "msw";
import { APIResponse, ToDo, ToDoDto } from "../types/api";

const apiWrapper = <T>(data: T, code = 200, message = ""): APIResponse<T> => {
  return {
    code,
    message,
    data,
  };
};

const fetchTodos = (): ToDo[] => {
  try {
    return JSON.parse(localStorage.getItem("todos") ?? "[]");
  } catch (error) {
    localStorage.setItem("todos", "[]");
    return [];
  }
};

const setTodos = (todos: ToDo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getTodo = (id: number) => {
  const todos = fetchTodos();
  return todos.find((todo) => todo.id === id);
};

export const handlers = [
  http.get("/api/todos", () => {
    return HttpResponse.json(apiWrapper<ToDo[]>(fetchTodos()));
  }),

  http.post<PathParams, ToDoDto>("/api/todos", async ({ request }) => {
    const todos: ToDo[] = fetchTodos();
    const payload: ToDoDto = await request.json();
    const newId = todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
    const newTodo = {
      id: newId,
      content: payload.content,
      isCompleted: false,
    };
    todos.push(newTodo);
    setTodos(todos);
    return HttpResponse.json(apiWrapper<ToDo>(newTodo));
  }),

  http.get<PathParams<"id">>("/api/todos/:id", ({ params }) => {
    return HttpResponse.json(
      apiWrapper<ToDo | undefined>(getTodo(Number(params.id)))
    );
  }),

  http.patch<PathParams<"id">, Partial<ToDoDto>>(
    "/api/todos/:id",
    async ({ params, request }) => {
      const todos: ToDo[] = fetchTodos();
      const payload = await request.json();
      const id = Number(params.id);

      const index = todos.findIndex((todo) => todo.id === id);
      if (index < 0) {
        return HttpResponse.json(apiWrapper<void>(undefined, 404, "Not Found"));
      }

      todos[index] = {
        ...todos[index],
        ...payload,
      };

      setTodos(todos);
      return HttpResponse.json(apiWrapper<ToDo>(todos[index]));
    }
  ),

  http.delete<PathParams<"id">>("/api/todos/:id", async ({ params }) => {
    const todos: ToDo[] = fetchTodos();
    const index = todos.findIndex((todo) => todo.id === Number(params.id));
    if (index < 0) {
      return HttpResponse.json(apiWrapper<void>(undefined, 404, "Not Found"));
    }
    todos.splice(index, 1);
    setTodos(todos);
    return HttpResponse.json(apiWrapper<void>(undefined));
  }),
];
