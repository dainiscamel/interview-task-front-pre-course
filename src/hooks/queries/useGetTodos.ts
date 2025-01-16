import { getTodos, getTodosRoute } from "@/services/todos";
import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery({
    queryKey: [getTodosRoute()],
    queryFn: async () => {
      const result = await getTodos();
      return {
        ...result,
      };
    },
  });
};
