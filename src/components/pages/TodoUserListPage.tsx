"use client";
import React from "react";
import styled from "@emotion/styled";
import { AddTodo } from "@/components/pages/todo/AddTodo";
import { TodoList } from "@/components/pages/todo/TodoList";

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

const TodoTitle = styled.h1`
  color: #333333;
  font-weight: 700;
  font-family: "Pretendard";
  font-size: 56px;
  line-height: 72px;
  text-align: center;
  margin-bottom: 64px;
`;

const TodoUserListPage = () => {
  return (
    <Container>
      <Wrapper>
        <TodoTitle>To Do List</TodoTitle>
        <AddTodo />
        <TodoList />
      </Wrapper>
    </Container>
  );
};

export default TodoUserListPage;
