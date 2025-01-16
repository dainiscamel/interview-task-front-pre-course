import styled from "@emotion/styled";
import Todo from "@/components/pages/todo/Todo";
import { useState } from "react";
import TodoFilter from "./TodoFilter";

interface TodoItem {
  id: number;
  content: string;
  isCompleted: boolean;
}

type FilterType = "All" | "To Do" | "Done";

const Container = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 24px;
  box-shadow:
    0px 16px 32px 0px rgba(0, 0, 0, 0.12),
    0px 0px 6px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      content: "할일",
      isCompleted: false,
    },
  ]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("All");

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
    <Container>
      <TodoFilter />
      <div>총 {todos.length}개</div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          content={todo.content}
          onToggle={() => handleToggle(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    </Container>
  );
};
