// // src/components/PostsList.js
// import React, { useEffect, useState } from 'react';
// import { getAllPosts } from '../api/posts';
// import { PiEyesFill } from "react-icons/pi";

// const PostsList = () => {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const postsData = await getAllPosts();
//         setPosts(postsData);
//       } catch (err) {
//         setError(err.message);
//       }
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
//       {error && <div className="text-red-500">{error}</div>}
//       <div className="space-y-4">
//         <div className='grid grid-cols-3 gap-5'>
//           {posts.map((post) => (
//             <>
//               <div key={post._id} className="p-4 border rounded-lg shadow-md hover:shadow-lg">
//                 <h2 className="text-3xl font-bold text-center ">{post.categoriesName}</h2>
//                 <div className='flex justify-between'>

//                 <h2 className="text-md font-bold  ">
//                   {post.publishDate
//                     ? (() => {
//                       const date = new Date(post.publishDate);
//                       const day = String(date.getDate()).padStart(2, '0');
//                       const month = String(date.getMonth() + 1).padStart(2, '0');
//                       const year = date.getFullYear();
//                       return `${day}-${month}-${year}`;
//                     })()
//                     : 'Date not available'}
//                 </h2>
//                 <div className='flex gap-2'>
//                 <div className='mt-1'><PiEyesFill /></div><div>{post.views}</div>
//                 </div>
//                     </div>
//                 <h2 className="text-xl font-semibold">{post.title}</h2>
//                 <p className="text-gray-500">{post.description}</p>
//                 {/* Change here: Pass the post's _id */}
//                 <div className='mt-3 '>

//                 <a href={`/posts/${post._id}`} className="text-black  p-2 bg-gray-200 rounded-lg hover:underline">
//                   Read more
//                 </a>
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostsList;


// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/posts';
import { PiEyesFill } from "react-icons/pi";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {error && <div className="text-red-500">{error}</div>}
      <div className="space-y-4">
        <div className='grid grid-cols-3 gap-5'>
          {posts.map((post) => (
            <div
              key={post._id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg relative h-72 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold text-center">{post.categoriesName}</h2>
                <div className='flex justify-between'>
                  <h2 className="text-md font-bold">
                    {post.publishDate
                      ? (() => {
                        const date = new Date(post.publishDate);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}-${month}-${year}`;
                      })()
                      : 'Date not available'}
                  </h2>
                  <div className='flex gap-2'>
                    <div className='mt-1'><PiEyesFill /></div><div>{post.views}</div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                <p className="text-gray-500">
                  {post.description
                    ? post.description.split(" ").slice(0, 11).join(" ") + (post.description.split(" ").length > 11 ? "..." : "")
                    : "No description available"}
                </p>              </div>
              <a
                href={`/posts/${post._id}`}
                className="absolute bottom-4 left-4 text-black px-4 py-2 bg-gray-200 rounded-lg hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsList;
