import { useForm } from "react-hook-form";

// export default function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//     setToDoError("");
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       {
//         return setToDoError("To do should be longer");
//       }
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to-do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

interface IForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  comfirmation: string;
  email?: string;
  extraError?: string;
}

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  console.log(errors);

  const onValid = (data: IForm) => {
    if (data.password !== data.comfirmation) {
      setError(
        "comfirmation",
        { message: "Passwords are not the same" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("firstName", { required: "Required" })}
          placeholder="First Name"
        />
        <span>{errors.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Required" })}
          placeholder="Last Name"
        />
        <span>{errors.lastName?.message}</span>
        <input
          {...register("username", {
            required: "Required",
            validate: (value) => value === "yeon" && "이미 사용 중입니다.",
          })}
          placeholder="Username"
        />
        <span>{errors.username?.message}</span>
        <input
          {...register("password", {
            required: "Required",
            minLength: { value: 8, message: "Password is too short" },
          })}
          placeholder="Password"
        />
        <span>{errors.password?.message}</span>
        <input
          {...register("comfirmation", { required: "Required", minLength: 8 })}
          placeholder="Password Comfirmation"
        />
        <span>{errors.comfirmation?.message}</span>
        <input
          {...register("email", {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "Only email allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors.email?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
