import React, { createContext } from 'react'

const blogContext = createContext(null)

function BlogContext({children}) {
  return (
    <blogContext.Provider>{children}</blogContext.Provider>
  )
}

export default BlogContext