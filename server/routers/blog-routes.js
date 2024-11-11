const express = require ('express')
const router = express.Router()

const {fetchListOfBlog,addNewBlog,deleteABlog,updateABlog} = require('../controllers/blog-controller')

router.get('/', fetchListOfBlog)
router.post('/add' , addNewBlog)
router.put('/update/:id' , updateABlog)
router.delete('/delete/:id' , deleteABlog)


module.exports = router