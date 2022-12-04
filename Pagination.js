import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage ); i++) {
        pageNumbers.push(i);
    }
  return (
    <div className='pagination'>
        {pageNumbers.map(number => (
            <li key={number} className="page-items">
                <a onClick={() => paginate(number)}href="!#" className="links">
                    {number}
                </a>
            </li>
        ))}
    </div>
  )
}

export default Pagination
