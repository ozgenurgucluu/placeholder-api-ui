import classNames from "classnames";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const UserMedia = () => {
  const params = useParams();
  const location = useLocation();
  const menu = [
    {
      to: `/user/${params.userId}`,
      text: "Posts",
    },
    {
        to: `/user/${params.userId}/albums`,
        text: "Albums",
      },
      {
        to: `/user/${params.userId}/todos`,
        text: "Todos",
      },
  ];

  return (
    <div className="py-2  mx-28 flex border-t border-black/25 bg-slate-300 rounded-md dark:bg-slate-400">
      <div className="flex mx-auto gap-16 ">
        {
            menu.map((link,index)=>(
                <Link key={index} to={link.to} className={classNames("px-6 py-2 border border-gray-400 rounded-full",
                {
                  "font-bold text-white bg-blue-500 ": (location.pathname.startsWith(link.to)&& link.to!= `/user/${params.userId}`)|| location.pathname==link.to
                })}><span>{link.text}</span></Link>
            ))
        }
      </div>
    </div>
  );
};

export default UserMedia;
