const express = require('express');

const router = express.Router();
const Post = require('../models/Post');


//get all posts
router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();
    }catch(err){
        res.json({message:err});
    }
});


//insert post
router.post('/',async (req,res)=>{
   const post = new Post({
       title:req.body.title,
       description:req.body.description
   });

   try{
       const savePost = await post.save();
       res.json(savePost);
   }catch(err){
        res.json({message:err});
   }
   /* .then(data =>{
       res.json(data);
   })
   .catch(err =>{
       res.json({message:err})
   }); */
});

//get specific post
router.get('/:postID',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//delete post
router.delete('/:postID',async (req,res)=>{
    try{
        const deletePost = await Post.remove({_id:req.params.postID});
        res.json(deletePost);
    }catch(err){
        res.json({message:err});
    }
});

//update a post
router.patch('/:postID',async (req,res)=>{
    try{
        const updatePost = await Post.updateOne({_id:req.params.postID},
            {$set:{title:req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router;