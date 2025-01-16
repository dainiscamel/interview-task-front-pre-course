export interface ToDo {
  id: number;
  content: string;
  isCompleted: boolean;
}

export interface APIResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface ToDoDto {
  content: string;
  isCompleted: boolean;
}
