import React from 'react'


const Pagination = ({totalPosts, pagePerShow, setCurrentPage, currentPage}) => {
  let pages = [];

  const int = Math.ceil(totalPosts/pagePerShow)
  if(int === 1) return null;
  for(let i = 1; i <= int; i++) {
    pages.push(i)
  }

  const nextPage = (e) => {
    e.preventDefault();
    
    if(currentPage === 5) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = (e) => {
    e.preventDefault();
    if(currentPage === 1) {
      setCurrentPage(5);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }


  return (
    <div>
       <button
        className='pages__btns' onClick={prevPage}>prev</button>
      
      {pages.map((page, index) => {
        return <button
                className={page === currentPage ? 'active__page' : 'pages__btns'} key={index} onClick={() => setCurrentPage(page)}>{page}</button>
      })}

       <button
         className='pages__btns' onClick={nextPage}>next</button>
    
    </div>
   
  )
}


export default Pagination