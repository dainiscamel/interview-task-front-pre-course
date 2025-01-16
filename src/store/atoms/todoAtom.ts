import { atom } from "recoil";

export const todoState = atom<"All" | "To Do" | "Done">({
  key: "todoState",
  default: "All",
});

export const todoCountState = atom<number>({
  key: "todoCountState",
  default: 0,
});
