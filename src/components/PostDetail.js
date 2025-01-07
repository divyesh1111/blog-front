// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For routing
import { getPostById } from '../api/posts';

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostById(id); // Fetch post data by ID
        setPost(postData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]); // Only fetch when the ID changes

  if (error) return <div className="text-red-500">{error}</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-4">{post.publishDate}</div>
      <div className="prose max-w-none">{post.blogDetails}</div> {/* Assuming the post has blogDetails */}
    </div>
  );
};

export default PostDetail;
