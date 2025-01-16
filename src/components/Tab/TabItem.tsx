import styled from "@emotion/styled";
import { TodoType } from "@/types/todo";

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 8px 44.5px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 16px;
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
