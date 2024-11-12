const mongoose = require('mongoose')
const blog = require('../models/blog');

// fetch a blog
// add a blog
// delete a blog
// update a blog

//fetch a blog
const fetchListOfBlog = async(req,res) => {
    let blogList ;
    try {
        blogList = await blog.find()
    } catch (error) {
        console.log("Error from fetchListOfBlog : -" , error);
    }

    if(!blogList) return res.status(404).json({message : "No BLog is Found !"})

    return res.status(201).json({blogList})
}


// add a blog 

const addNewBlog = async(req,res) => {
    const {title,description} = req.body;
    const currentDate = new Date;

    const newlyCreatedBlog  = new blog({title,description,date : currentDate})

    try {
        await newlyCreatedBlog.save()
    } catch (error) {
        console.log("Error from addnewBlog : -" , error);
    }     

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newlyCreatedBlog.save(session)
        session.commitTransaction()
    } catch (error) {
        return res.send(500).json({message : e})
    }

    return res.status(200).json({newlyCreatedBlog})
}

//delete blog

const deleteABlog = async(req,res) =>{
    const id = req.params.id;

    try {
        const findCurrentBlogId = await blog.findByIdAndDelete(id)
        if(!findCurrentBlogId){
            return res.status(400).json({message: 'Blog not found'})
        }
        return res.status(200).json({message : "Succesfully Deleted !"})

    } catch (error) {
        console.log("error from delete : - ",error);
        return res.status(500).json({message : 'Unable to Delete ! Please try  again'})
        
    }
}


//update blog

const updateABlog = async(req,res) => {
    const id = req.params.id;
    const {title,description} = req.body;

    let currentBlogUpdate;

    try {
        currentBlogUpdate = await blog.findByIdAndUpdate(id , {title,description})
        
    } catch (error) {
        console.log("Error from update : - ", error );
        return res.send(500).json({message : "SomeThing went wrong while Updating !Please try again"}) 
    }

    if(!currentBlogUpdate){
        return res.status(500).json({message : "Unable to update"})
    }

    return res.status(200).json({currentBlogUpdate})
}


module.exports = {fetchListOfBlog,addNewBlog,deleteABlog,updateABlog}