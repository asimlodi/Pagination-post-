import React from 'react'

const Post = ({ posts, loading }) => {
    if(loading) {
        return <h2>Loading....</h2>
    }

  return (
    <ul className="list-group">
        {posts.map(post => (
            <li key={post.id} className="list-item">
              {post.title}
            </li>
        ))}
    </ul>
  )
}

export default Post
