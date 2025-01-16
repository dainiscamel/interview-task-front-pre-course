import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import TodoUserListPage from "./TodoUserListPage";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "@/styles/theme";
import "@testing-library/jest-dom";

describe("TodoUserListPage", () => {
  const renderWithProviders = () => {
    render(
      <RecoilRoot>
        <ThemeProvider theme={baseTheme}>
          <TodoUserListPage />
        </ThemeProvider>
      </RecoilRoot>
    );
  };

  it("할일을 추가할 수 있어야 한다", () => {
    renderWithProviders();
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    fireEvent.change(input, { target: { value: "할 일 내용" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const addedTodo = screen.getByText("할 일 내용");
    expect(addedTodo).toBeInTheDocument();
  });

  it("할일을 체크하면 완료 상태로 변경되어야 한다", () => {
    renderWithProviders();
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    fireEvent.change(input, { target: { value: "테스트 할일" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const todoContainer = screen.getByText("테스트 할일").closest("div");
    expect(todoContainer).toBeInTheDocument();

    const checkbox = todoContainer?.firstChild;
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox as Element);

    expect(screen.getByText("테스트 할일")).toBeInTheDocument();
  });

  it("Done 필터를 선택하면 완료된 할일만 보여야 한다", () => {
    renderWithProviders();
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    fireEvent.change(input, { target: { value: "완료된 할일" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const doneTab = screen.getByRole("button", { name: "Done" });
    fireEvent.click(doneTab);

    const todoItems = screen.queryAllByText(/할일/);
    expect(todoItems).toHaveLength(0);
  });
});
