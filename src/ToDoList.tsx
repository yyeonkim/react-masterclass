import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onValid = (data: any) => console.log(data);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: true,
            minLength: { value: 8, message: "Password is too short" },
          })}
          placeholder="Password"
        />
        <input
          {...register("comfirmation", { required: true, minLength: 8 })}
          placeholder="Password Comfirmation"
        />
        <input {...register("email")} placeholder="Email" />
        <button>Add</button>
      </form>
    </div>
  );
}
