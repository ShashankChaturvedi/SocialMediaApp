import React, { useEffect, useState } from 'react'
import Header from "../../component/Header/Header"
import BlogCard from '../../component/Blog/BlogCard'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/post/all');
        let postsArr = response.data.posts;

        let newPostArr = postsArr.map(el => {
          return { ...el, isLiked: false }

        })

        setPosts(newPostArr);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPosts();
  }, []);

  console.log("posts", posts)

  function handleLike(e, id) {
    e.stopPropagation();
    setPosts((oldPost) => {
      return oldPost.map(post => post._id === id ? { ...post, isLiked: !post.isLiked } : post)
    })
  }

  const navigate = useNavigate();

  function handleViewPost(id) {
    navigate(`/posts/${id}`);
  }

  let postElements = posts.map(el => {
    return <BlogCard key={el._id} props={el} handleLike={(e) => handleLike(e, el._id)} handleViewPost={() => handleViewPost(el._id)} />
  })

  return (
    <div className="App">
      <Header />
      <div className="posts">
        {postElements}
      </div>
    </div>
  )
}
