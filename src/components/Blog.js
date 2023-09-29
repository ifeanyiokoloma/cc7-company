import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://backend-service-omu3.onrender.com");
      setPost(res.data);
    };

    getPost();
  }, []);

  console.log(post);

  return (
    <section>
      <h1>Blog</h1>
    </section>
  );
};

export default Blog;
