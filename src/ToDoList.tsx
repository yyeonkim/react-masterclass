import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  console.log(errors);

  const onValid = (data: IForm) => {
    setValue("toDo", "");
    console.log("Added", data.toDo);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          placeholder="Write to-do"
          {...register("toDo", { required: "Please write to-do" })}
        />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
