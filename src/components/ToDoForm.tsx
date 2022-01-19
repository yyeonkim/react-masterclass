import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export default function ToDoForm() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

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
      { text: toDo, id: Date.now(), category },
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        placeholder="Write to-do"
        {...register("toDo", { required: "Please write to-do" })}
      />
      <span>{errors.toDo?.message}</span>
      <button>Add</button>
    </form>
  );
}
