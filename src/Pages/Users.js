import React, { useState } from 'react'
import { useEffect } from 'react'
import UserCard from '../components/UserCards'
import Pagination from '../components/Pagination'
import axios from 'axios';

function Users() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  
  const [pagePerShow, setPagePerShow] = useState(3);

  //  eslint-disable-next-line
  const URL = 'https://randomuser.me/api/?page=5&results=10&seed=abcde'


  const fetchUser = () => {
    setLoading(true);
    axios.get('https://randomuser.me/api/?page=5&results=10&seed=abcd')
    .then((response) => {
      setUserData(response.data.results);
    }).catch((error) => {
      if(error) {
        throw new Error('error!!')
      } 
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const lastPostIndex = currentPage * pagePerShow;

  const firstPostIndex = lastPostIndex - pagePerShow; 

  const currentPosts = userData.slice(firstPostIndex, lastPostIndex)

  

  return (
        <section class="service section">
          <div class="container">
            <div class="row">
              <div class="section__title padd__15">
                <h2>Users</h2>
              </div>
            </div>
          </div>

            <div className="user__section">
              
                {loading ? <h2>Loading...</h2>
                :
                    <UserCard data={currentPosts} />
                }
            </div>
            <div className='pagination'>
                  <Pagination 
                  totalPosts={userData.length} 
                  pagePerShow={pagePerShow} 
                  setCurrentPage={setCurrentpage} 
                  currentPage={currentPage}  
                />
            </div>
      </section>
  )
}

export default Users