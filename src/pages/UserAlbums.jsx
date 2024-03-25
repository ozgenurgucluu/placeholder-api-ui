import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

const UserAlbums = () => {
  const location=useLocation();
  const params = useParams();
  const [albums, setAlbums] = useState([
    {
      id: "",
      title: "",
    },
  ]);
  const getAlbums = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`
      )

      .then((response) => {
        console.log("burası çalıştı");
        setAlbums(response.data);
      });
  };
  useEffect(() => {
    getAlbums();
  }, []);
  return (
    albums && (
      <div className=" flex flex-col mx-28  bg-slate-300 rounded-xl">
        <div className="flex">
          <div className="mx-16 p-7 font-bold text-lg text-blue-500">
            ALBUMS ({albums.length})
          </div>
        </div>
        <div className="grid grid-cols-3 mx-16 p-7 gap-6 -my-6 pb-10 ">
          {albums.map((album) => (
            <div className="min-aspect-[3/2]  bg-blue-500 rounded-lg text-whitep-10 p-10 text-white font-semibold ">
              <Link
                key={album.id}
                to={`/user/${params.userId}/albums/${album.id}`}
              >
                <h2>{album.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default UserAlbums;
