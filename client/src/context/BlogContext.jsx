import React, { createContext, useState } from 'react'

export const blogContext = createContext(null)

function BlogContext({children}) {
  const [blogList ,setBlogList] = useState([])
  const [pending ,setPending] = useState(false)
  const [isEdit ,setIsEdit ]= useState(false)
  const [formData ,setFormData] = useState({
    title: '',
    description : ''
  })

  return (
    <blogContext.Provider  value={{formData ,setFormData,blogList ,setBlogList,pending ,setPending,isEdit ,setIsEdit}}>{children}</blogContext.Provider>
  )
}

export default BlogContext