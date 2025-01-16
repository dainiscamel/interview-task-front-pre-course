import styled from "@emotion/styled";
import React, { useState } from "react";
import Checkbox from "@/components/CheckBox/CheckBox";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 8px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.06);
  margin-bottom: 8px;
`;

const TodoContent = styled.span`
  flex: 1;
  margin: 0 16px;
`;

const DeleteButton = styled.button<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  background: transparent;
  border: none;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

interface TodoProps {
  content: string;
  onDelete: () => void;
  onToggle: () => void;
}

const Todo = ({ content, onDelete, onToggle }: TodoProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox checked={isChecked} onChange={handleToggle} />
      <TodoContent>{content}</TodoContent>
      <DeleteButton type="button" onClick={onDelete} $isVisible={isHovered}>
        <Image src="/icons/Close.svg" alt="할 일 삭제" width={14} height={14} />
      </DeleteButton>
    </Container>
  );
};

export default Todo;
