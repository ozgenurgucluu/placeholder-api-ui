import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const params = useParams();
  const [userPosts, setUserPosts] = useState([]);

  const getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
      .then((response) => {
        setUserPosts(response.data);
      });
  };
  useEffect(() => {
    getPosts(), [];
  });
  return (
    <div className="mx-28 flex bg-slate-300 rounded-md">
      <div className=" h-min[30px] ">
        {userPosts.map((post) => (
          <div key={post.id} className="border border-black/15 h-min[30px] p-3">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
