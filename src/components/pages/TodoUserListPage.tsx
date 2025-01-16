"use client";
import React from "react";
import styled from "@emotion/styled";
import { AddTodo } from "../todo/AddTodo";
import { TodoList } from "../todo/TodoList";

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
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Wrapper>
        <AddTodo />
        <TodoList />
      </Wrapper>
    </Container>
  );
};

export default TodoUserListPage;
