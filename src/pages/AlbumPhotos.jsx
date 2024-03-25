import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon";

const AlbumPhotos = () => {
  const params = useParams();
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const getAlbumPhotos = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`)
      .then((response) => {
        setAlbumPhotos(response.data);
        
        
      });
  };
  useEffect(() => {
    getAlbumPhotos();
  }, []);
  return (
    albumPhotos && (
      <div className="flex flex-col mx-28  bg-slate-300 rounded-xl ">
         <Link to={ `/user/${params.userId}/albums/`} className="p-3">
          <BackIcon />
        </Link>
        <div className="grid grid-cols-3 mx-16 p-14 gap-6 -my-6 ">
          {albumPhotos.map((photo) => (
            <div
              key={photo.id}
              className="min-aspect-[3/2] border border-white rounded-2xl bg-slate-500 p-6 font-semibold "
            >
              <img src={`https://picsum.photos/200/200?random=${photo.id}`} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default AlbumPhotos;
