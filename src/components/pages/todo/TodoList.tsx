import styled from "@emotion/styled";
import Todo from "@/components/pages/todo/Todo";
import TodoFilter from "./TodoFilter";
import { useGetTodos } from "@/hooks/queries/useGetTodos";
import { useUpdateTodo } from "@/hooks/queries/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/queries/useDeleteTodo";
import { useRecoilValue } from "recoil";
import { todoState } from "@/store/atoms/todoAtom";
import { ToDo } from "@/types/api";

const Container = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 24px;
  box-shadow:
    0px 16px 32px 0px rgba(0, 0, 0, 0.12),
    0px 0px 6px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TodoCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GREY_MEDIUM};
`;

export const TodoList = () => {
  const { data: todos = [] } = useGetTodos();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const filter = useRecoilValue(todoState);

  const handleToggle = (id: number) => {
    const todo = todos.find((todo: ToDo) => todo.id === id);
    if (todo) {
      updateTodo({
        id,
        todo: { content: todo.content, isCompleted: !todo.isCompleted },
      });
    }
  };

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const filteredTodos = todos.filter((todo: ToDo) => {
    switch (filter) {
      case "To Do":
        return !todo.isCompleted;
      case "Done":
        return todo.isCompleted;
      default:
        return true;
    }
  });

  return (
    <Container>
      <TodoFilter />
      <TodoCount>총 {todos.length}개</TodoCount>
      {filteredTodos.map((todo: ToDo) => (
        <Todo
          key={todo.id}
          content={todo.content}
          onToggle={() => handleToggle(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    </Container>
  );
};
