import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      });
    console.log(userList);
  };
 

  return (
    <div className="container  max-w-[960px] flex flex-col mx-auto my-12 p-9">
      <h1 className="mx-auto font-bold">USERS({userList.length})</h1>
      <div className=" grid grid-cols-3 gap-5 overflow-hidden my-16">
        {userList.map((user, index) => (
          <Link
            to={`/user/${user.id}`}
            key={index}
            className="aspect-[3/2] bg-gray-300 border hover:border-slate-700 rounded-lg p-6 opacity-75 hover:opacity-100 mx-left font-semibold"
          >
           
            <div className="flex flex-col">
              <img
                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user.username}`}
                className="w-[200px] h-[200px] mx-auto"
              />
              <span className="font-bold">{user.name}</span>
              <span>{user.email}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
