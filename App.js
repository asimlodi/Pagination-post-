import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';
import Pagination from './Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

 useEffect(() => {
     const fetchPosts = async () => {
       setLoading(true);
       const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
       setPosts(res.data);
       setLoading(false)
     }

     fetchPosts();
 }, [])
 
 //Get current Posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

 //Change Page

 const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
       <h1>My Blog</h1>
       <Post posts={currentPosts} loading={loading} />
       <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
