import React, { useContext, useEffect } from 'react'
import classes from './AddBlog.module.css'
import { blogContext } from '../context/BlogContext'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'

function AddBlog() {
  const navigate = useNavigate()
    const location = useLocation()

  const {formData ,setFormData,isEdit ,setIsEdit} = useContext(blogContext)
  // console.log("Form data" ,formData);

  const handleBlogDataToDataBase = async() => {
    const response = isEdit ? await axios.put(`http://localhost:3000/api/blogs/update/${location.state.getData._id}` ,{title : formData.title ,description :formData.description}) :  await axios.post('http://localhost:3000/api/blogs/add' , {
      title : formData.title,
      description : formData.description
    })
    const result = await response.data;
     console.log(result,"result" );

     if(result){
      setIsEdit(false)
        setFormData({
          title : '',
          description :''
        })
        navigate('/')
     }
  
  }


  useEffect(()=>{
    console.log(location);
    if(location.state) {
      const {getData} = location.state
    setIsEdit(true)
      setFormData({
        title : getData.title,
        description : getData.description
      })
    }
    
  },[location])
  
  return (
    <div className={classes.wrapper}>
        <h1>{isEdit ? 'Edit a Blog' : 'Add a Blog'}</h1>
        <div className={classes.formwrapper}>
          <input onChange={(e) => setFormData({...formData , title : e.target.value})} value={formData.title} type="text" name="title" id="title" placeholder='Enter blog title' />
          <textarea onChange={(e) => setFormData({...formData , description : e.target.value} )} value={formData.description} name="description" id="description" placeholder='Enter blog description'></textarea>
          <button onClick={handleBlogDataToDataBase} >{isEdit ? "Update" : "Add new Blog"}</button>
        </div>
    </div>
  )
}

export default AddBlog