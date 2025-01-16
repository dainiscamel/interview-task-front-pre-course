import styled from "@emotion/styled";
import { TodoType } from "@/types/todo";

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.BLUE_LIGHT : "transparent"};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.BLUE_HEAVY : theme.colors.GREY_MEDIUM};
  cursor: pointer;
`;

interface TabItemProps {
  label: string;
  value: TodoType;
  isActive: boolean;
  onClick: (value: TodoType) => void;
}

export const TabItem = ({ label, value, isActive, onClick }: TabItemProps) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <TabButton isActive={isActive} onClick={handleClick}>
      {label}
    </TabButton>
  );
};
