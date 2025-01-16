import { createTodo, getTodosRoute } from "@/services/todos";
import { ToDoDto } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateTodo = () => {
  return useMutation({
    mutationKey: [getTodosRoute()],
    mutationFn: (payload: ToDoDto) => createTodo(payload),
  });
};
