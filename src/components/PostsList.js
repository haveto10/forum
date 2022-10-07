import React, { useEffect, useState } from "react";
import { Container, ListItemText } from "@material-ui/core";


export default function PostsList({ thread_id }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/post/getallpost")
      .then((res) => res.json())
      .then((result) => {
        const goodPosts = result.filter((post) => post.thread.id === thread_id);
        setPosts(goodPosts);
      });
  }, [thread_id]);

  return (
    <Container>
      {posts.map((post) => (
          <ListItemText primary={post.title}/>
      ))}
    </Container>
  );
}
