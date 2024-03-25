import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TickIcon from "../icons/TickIcon";

const UserTodos = () => {
  const params = useParams();
  const [checked, setChecked] = useState(true);
  const [todos, setTodos] = useState([
    {
      userId: "1",
      id: " 1",
      title: "delectus aut autem",
      completed: false,
    },
  ]);

  const getTodos = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${params.userId}`)
      .then((response) => {
        console.log("API'den gelen veri:", response.data);
        setTodos(response.data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    todos && (
      <div className=" mx-28 flex flex-col bg-slate-300 rounded-md p-6">
        <div className="flex flex-col gap-2 mx-auto min-w-[390px] p-5  ">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="border border-white bg-blue-500 rounded-lg text-white p-4"
            >
              <div className="flex">
                <span className="mx-3 text-[16px] font-semibold"> {todo.title}</span>
                {todo.completed==true && <TickIcon/>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default UserTodos;
