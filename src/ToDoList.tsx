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
  const { register, watch } = useForm();
  console.log(watch);

  return (
    <div>
      <form>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input
          {...register("comfirmation")}
          placeholder="Password Comfirmation"
        />
        <input {...register("email")} placeholder="Email" />
        <button>Add</button>
      </form>
    </div>
  );
}
