import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ],
});
