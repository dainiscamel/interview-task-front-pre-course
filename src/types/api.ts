export interface ToDo {
  id: number;
  text: string;
  done: boolean;
}

export interface APIResponse<T> {
  code: number;
  message?: string;
  data?: T;
}

export type ToDoDto = Pick<ToDo, "text">;

export type ToDoRequest = Omit<ToDo, "id">;
