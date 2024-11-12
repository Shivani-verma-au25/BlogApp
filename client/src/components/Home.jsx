import React, { useContext, useEffect } from 'react'
import { blogContext } from '../context/BlogContext'
import axios from 'axios'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import {useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const {blogList ,setBlogList,pending ,setPending} = useContext(blogContext)

  const fetchingListFoBlogData = async() => {
    setPending(true)
    const response = await axios.get('http://localhost:3000/api/blogs')
    const result = await response.data

    // console.log(result);

    if (result && result.blogList && result.blogList.length ) {
      setBlogList(result.blogList)
      setPending(false)
    }else{
      setPending(false)
      setBlogList([])
    }
  }

  const deleteBlog = async(getid) => {
    // console.log(getid);
    const response = await axios.delete(`http://localhost:3000/api/blogs/delete/${getid}`)
    const result = await response.data

    if(result?.message){
      fetchingListFoBlogData() // best approch to call method instead of refreshing the page again and again
      // navigate(0)  // this refresh the page 
    }

  }

  const editBlogitem = (getData) => {
    console.log(getData);
    navigate('/add' , {state  :{getData}})
    
  }

  useEffect(() => {
    fetchingListFoBlogData()
  },[])



  return (
    <div className='w-screen h-screen'>
        <h1>Blog List</h1>

        {pending ? <h1>Loading blogs ! Please wait for while</h1> : <div>
          {blogList && blogList.length ? blogList.map(blogItem => <div className='flex flex-wrap min-h-12 max-w-[50%] justify-start items-center gap-10 border border-red-500' key={blogItem.id}>
            <div className=''>
              <p>{blogItem.title}</p>
              <p>{blogItem.description}</p>
              <div className='flex justify-between px-4 py-3'>
                <FaTrash onClick={()=> deleteBlog(blogItem._id)} className=" text-xl"/>
               <FaEdit onClick={ () => editBlogitem(blogItem)} className=" text-xl"/>
              </div>
            </div>
          </div> ) : <h2>No Blogs Added</h2> }
        </div> }

        
    </div>
  )
}

export default Home