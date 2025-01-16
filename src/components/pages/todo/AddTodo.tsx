import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "@/store/atoms/todoAtom";
import { ToDo } from "@/types/todo";

const Container = styled.div`
  margin-bottom: 32px;
`;

const AddInput = styled.input`
  width: 100%;
  height: 92px;
  padding: 32px;
  border-radius: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
  box-shadow:
    0px 16px 32px 0px rgba(0, 0, 0, 0.12),
    0px 0px 6px 0px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  &::placeholder {
    color: ${({ theme }) => theme.colors.GREY_MEDIUM};
  }
`;

export const AddTodo = () => {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && content.trim()) {
      if (content.length > 20) {
        alert("할 일은 20글자를 넘길 수 없습니다.");
        return;
      }

      const uncompletedTodos = todos.filter((todo) => !todo.isCompleted);
      if (uncompletedTodos.length >= 10) {
        alert("처리가 안된 할 일은 10개를 넘을 수 없습니다.");
        return;
      }

      const newTodo: ToDo = {
        id: todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
        content: content.trim(),
        isCompleted: false,
      };

      setTodos([...todos, newTodo]);
      setContent("");
    }
  };

  return (
    <Container>
      <AddInput
        placeholder="할 일을 입력해 주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyPress}
        maxLength={20}
      />
    </Container>
  );
};
