import { createTodo, getTodosRoute } from "@/services/todos";
import { ToDoDto } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [getTodosRoute()],
    mutationFn: (payload: ToDoDto) => createTodo(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
