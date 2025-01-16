import { useMutation } from "@tanstack/react-query";
import { deleteTodo, getTodosRoute } from "@/services/todos";

export const useDeleteTodo = () => {
  return useMutation({
    mutationKey: [getTodosRoute()],
    mutationFn: (payload: number) => deleteTodo(payload),
  });
};
