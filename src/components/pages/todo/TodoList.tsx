import styled from "@emotion/styled";
import Todo from "@/components/pages/todo/Todo";
import TodoFilter from "./TodoFilter";
import { useRecoilValue } from "recoil";
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
  font-size: 20px;
  font-weight: 400;
`;

const TodoCount = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 16px;
`;

export const TodoList = () => {
  const todos = useRecoilValue(todosState);
  const filter = useRecoilValue(todoState);

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
        <Todo key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};
