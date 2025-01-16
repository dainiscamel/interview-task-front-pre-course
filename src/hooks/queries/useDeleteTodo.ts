import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, getTodosRoute } from "@/services/todos";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [getTodosRoute()],
    mutationFn: (payload: number) => deleteTodo(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
