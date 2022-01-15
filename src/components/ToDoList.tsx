import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

export default function ToDoList() {
  const [toDos, setToDos] = useRecoilState<IToDo[]>(toDoState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  console.log(errors);

  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      { text: toDo, id: Date.now(), category: "TO_DO" },
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          placeholder="Write to-do"
          {...register("toDo", { required: "Please write to-do" })}
        />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
