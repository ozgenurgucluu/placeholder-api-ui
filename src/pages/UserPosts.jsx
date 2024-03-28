import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserPosts = () => {
  const params = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const location = useLocation();

  const getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
      .then((response) => {
        setUserPosts(response.data);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="mx-28 flex bg-slate-300 rounded-lg dark:bg-gray-500  ">
      <div className="h-min[30px]">
        {userPosts.map((post) => (
          <div
            key={post.id}
            className="border border-black/15 h-min[30px] p-6 rounded-lg dark:border-white/50  "
          >
            <Link to={`/user/${params.userId}/post/${post.id}`}>
              <h2 className="font-bold text-blue-600 my-2 dark:text-blue-400">
                {post.title}
              </h2>
              <p className="text-cyan-950 dark:text-white dark:font-semibold  ">
                {post.body}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
