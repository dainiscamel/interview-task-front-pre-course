import { atom } from "recoil";

export const todoState = atom<"All" | "To Do" | "Done">({
  key: "todoState",
  default: "All",
});

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [],
});
