import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserIcon from "../icons/UserIcon";
import GithubIcon from "../icons/GithubIcon";
import PhoneIcon from "../icons/PhoneIcon";
import WebPageIcon from "../icons/WebPageIcon";
import AddressIcon from "../icons/AddressIcon";
import CompanyIcon from "../icons/CompanyIcon";

const UserInfo = () => {
  const params = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const getUserById = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((response) => {
        setUser(response.data);
      });
  };
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="mx-28 flex h-min-[280px] border border-black/25 bg-slate-300 rounded-md dark:bg-gray-500 ">
      <div className="flex gap-4 p-4 ">
        <img
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user.username}`}
          className="h-[150px] w-[150px]"
        />
      </div>
      <div className=" flex  text-lg my-9 mx-4 gap-3">
        <div className="flex flex-col dark:text-white">
          <p className="flex  ">
            <UserIcon /> {user.name}
          </p>
          <p className="flex">
            <GithubIcon /> {user.username}
          </p>
          <p className="flex">
            <PhoneIcon /> {user.phone}
          </p>
        </div>
        <div className="flex flex-col mx-7 dark:text-white">
          <p className="flex">
            <WebPageIcon /> {user.website}
          </p>
          <p className="flex -mx-1">
            <AddressIcon />
            <p>{user.address.street}</p>
            <p className="mx-1">{user.address.suite}</p>
            <p className="mx-1"> {user.address.city}</p>
            <p className="mx-1 flex">{user.address.zipcode}</p>
          </p>
          <p className="flex">
            <CompanyIcon />
            {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
