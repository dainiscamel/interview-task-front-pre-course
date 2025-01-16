import styled from "@emotion/styled";

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
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

export const TabItem = ({ label, value, isActive, onClick }: TabItemProps) => {
  return (
    <TabButton isActive={isActive} onClick={() => onClick(value)}>
      {label}
    </TabButton>
  );
};
