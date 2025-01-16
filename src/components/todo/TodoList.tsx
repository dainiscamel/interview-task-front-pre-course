import styled from "@emotion/styled";
import { TodoFilter } from "./TodoFilter";

const ListContainer = styled.div`
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

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 8px;
  box-shadow:
    0px 16px 32px 0px rgba(0, 0, 0, 0.12),
    0px 0px 6px 0px rgba(0, 0, 0, 0.06);
`;

export const TodoList = () => {
  return (
    <ListContainer>
      <TodoFilter />
      <div>총 3개</div>
      <TodoItem>
        <span>할 일 내용</span>
        <button>×</button>
      </TodoItem>
    </ListContainer>
  );
};
