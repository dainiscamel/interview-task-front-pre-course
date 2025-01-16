import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "@/services/todos";
import { ToDoDto } from "@/types/todo";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, todo }: { id: number; todo: ToDoDto }) =>
      updateTodo(id, todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
