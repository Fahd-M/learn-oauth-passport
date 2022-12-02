import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  //Fetch posts from DB
  const fetchPosts = () => {
    axios
      .get(`${SERVER_URL}/posts`, { withCredentials: true })
      // must include withCredentials for a GET request to pass the cookies to the server
      .then((posts) => {
        //update state with fetched posts
        setPosts(posts.data);
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="posts-page">
        <h1> Posts </h1>
        {/* NOTE the passed prop that allows it to re-fetch the posts after new one is created  */}
        <CreatePost onPostCreate={fetchPosts} />

        {/* Render a list of post components */}
        {posts.map((post) => (
            <Post key={post.post_id} post={post} />
        ))}
    </section>
  );
};

export default PostsPage;

// The posts page should render all the posts in the database.
