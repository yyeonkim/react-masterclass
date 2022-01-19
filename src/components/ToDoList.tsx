import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState); // Selected category

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />

      <select value={category} onInput={onInput}>
        <option value="TO_DO">TO DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>

      <ToDoForm />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
