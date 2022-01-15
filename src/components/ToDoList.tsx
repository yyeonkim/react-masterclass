import { useRecoilValue } from "recoil";

import { toDoState, IToDo } from "../atoms";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
  const toDos = useRecoilValue<IToDo[]>(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <ToDoForm />
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
    </div>
  );
}
