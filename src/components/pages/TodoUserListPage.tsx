"use client";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
  color: ${({ theme }) => theme.colors.BLACK};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 737px;
  min-height: 484px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 24px;
  box-shadow:
    0px 16px 32px 0px rgba(0, 0, 0, 0.12),
    0px 0px 6px 0px rgba(0, 0, 0, 0.06);
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Wrapper>
        <div>todo</div>
      </Wrapper>
    </Container>
  );
};

export default TodoUserListPage;
