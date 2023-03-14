import React from 'react'
// import {motion} from 'framer-motion';

const Pagination = ({totalPosts, pagePerShow, setCurrentPage, currentPage}) => {
  let pages = [];

  const int = Math.ceil(totalPosts/pagePerShow)
  if(int === 1) return null;
  for(let i = 1; i <= int; i++) {
    pages.push(i)
  }

  //  eslint-disable-next-line
  const nextPage = (e) => {
    e.preventDefault();
    
    if(currentPage === 2) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  // eslint-disable-next-line
  const prevPage = (e) => {
    e.preventDefault();
    if(currentPage === 1) {
      setCurrentPage(2);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }


  return (
    <nav>
      <ul className='Pagination'>
        {pages.map(numer => (
          <li key={pages} className='page-item'>
            <a href='Next Page' className='page-link'>
              {pages}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    
  )
}

export default Pagination