import styled from "@emotion/styled";

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
`;

interface TabProps {
  children: React.ReactNode;
  onChange: (value: string) => void;
}

export const Tab = ({ children, onChange }: TabProps) => {
  return <TabContainer>{children}</TabContainer>;
};
