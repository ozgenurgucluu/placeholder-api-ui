import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackIcon from "../icons/BackIcon";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState();
  const params = useParams();
  const getPostDetail = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response) => {
        setPostDetail(response.data);
      });
  };
  useEffect(() => {
    getPostDetail();
  }, []);
  return (
    postDetail && (
      <div className="mx-28 flex bg-slate-300 rounded-lg">
        <Link to={ `/user/${params.userId}`} className="p-3">
          <BackIcon />
        </Link>
        <div className="p-8 ">
          <h2 className="my-5 font-bold  text-blue-700">{postDetail.title}</h2>
          <p className= " font-semibold text-gray-900">{postDetail.body}</p>
        </div>
      </div>
    )
  );
};

export default PostDetail;
