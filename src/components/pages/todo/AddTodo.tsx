import styled from "@emotion/styled";

const Container = styled.div`
  margin-bottom: 24px;
`;

const AddInput = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
  box-shadow:
    0px 16px 32px 0px rgba(0, 0, 0, 0.12),
    0px 0px 6px 0px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
`;

export const AddTodo = () => {
  return (
    <Container>
      <AddInput placeholder="할 일을 입력해 주세요" />
    </Container>
  );
};
