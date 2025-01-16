import { http, HttpResponse, PathParams } from "msw";
import { APIResponse, ToDo, ToDoRequest } from "../types/api";

const apiWrapper = <T>(data: T, code = 200, message = ""): APIResponse<T> => {
  return {
    code,
    message,
    data,
  };
};

const fetchToDos = (): ToDo[] => {
  try {
    return JSON.parse(localStorage.getItem("todos") ?? "[]");
  } catch (error) {
    localStorage.setItem("todos", "[]");
    return [];
  }
};

const setToDos = (todos: ToDo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getToDo = (id: number) => {
  const todos = fetchToDos();
  return todos.find((todo) => todo.id === id);
};

export const handlers = [
  http.get("/api/todos", () => {
    return HttpResponse.json(apiWrapper<ToDo[]>(fetchToDos()));
  }),
  http.post<PathParams, ToDoRequest>("/api/todos", async ({ request }) => {
    const todos: ToDo[] = fetchToDos();
    const payload: ToDoRequest = await request.json();
    const newId = todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
    const newToDo = {
      id: newId,
      ...payload,
    };
    todos.push(newToDo);
    setToDos(todos);
    return HttpResponse.json(apiWrapper<ToDo>(newToDo));
  }),
  http.get<PathParams<"id">>("/api/todos/:id", ({ params }) => {
    return HttpResponse.json(
      apiWrapper<ToDo | undefined>(getToDo(Number(params.id)))
    );
  }),
  http.patch<PathParams<"id">, Partial<ToDoRequest>>(
    "/api/todos/:id",
    async ({ params, request }) => {
      const todos: ToDo[] = fetchToDos();
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

      setToDos(todos);
      return HttpResponse.json(apiWrapper<ToDo>(todos[index]));
    }
  ),
  http.delete<PathParams<"id">>("/api/todos/:id", async ({ params }) => {
    const todos: ToDo[] = fetchToDos();
    const index = todos.findIndex((todo) => todo.id === Number(params.id));
    if (index < 0) {
      return HttpResponse.json(apiWrapper<void>(undefined, 404, "Not Found"));
    } else {
      todos.splice(index, 1);
      setToDos(todos);
      return HttpResponse.json(apiWrapper<void>(undefined));
    }
  }),
];
