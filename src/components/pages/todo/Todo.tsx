import styled from "@emotion/styled";
import { useState } from "react";
import Checkbox from "@/components/CheckBox/CheckBox";
import Image from "next/image";
import { ToDo } from "@/types/todo";
import { useRecoilState } from "recoil";
import { todosState } from "@/store/atoms/todoAtom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 56px 34px 64px;
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 8px;
`;

const TodoContent = styled.span`
  flex: 1;
  margin: 0 16px;
`;

const DeleteButton = styled.button<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 56px 32px 64px
  cursor: pointer;
  background: transparent;
  border: none;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

interface TodoProps {
  todo: ToDo;
}

const Todo = ({ todo }: TodoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [todos, setTodos] = useRecoilState(todosState);

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

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => handleToggle(todo.id)}
      />
      <TodoContent>{todo.content}</TodoContent>
      <DeleteButton
        type="button"
        onClick={() => handleDelete(todo.id)}
        $isVisible={isHovered}
      >
        <Image src="/icons/Close.svg" alt="할 일 삭제" width={14} height={14} />
      </DeleteButton>
    </Container>
  );
};

export default Todo;
