import styled from "@emotion/styled";
import Todo from "@/components/pages/todo/Todo";
import TodoFilter from "./TodoFilter";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState, todosState } from "@/store/atoms/todoAtom";

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
  const [todos, setTodos] = useRecoilState(todosState);
  const filter = useRecoilValue(todoState);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
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
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={() => handleToggle(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    </Container>
  );
};
