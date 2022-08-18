import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["One", "Four", "Five", "Six", "Seven"],
    Doing: ["Two", "Three"],
    Done: ["Eight", "Nine", "Ten"],
  },
});
