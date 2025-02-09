const express = require('express');
const cors = require('cors')
const dotenv =require('dotenv');
const mongoose = require('mongoose');

const app =express()
app.use(cors())
app.use(express.json());  // ✅ Add this line before defining routes

const PORT = 5000;
const MONGOURI = 'mongodb+srv://srimathi_1106:sri123@srimathip.zfeb5xf.mongodb.net/?retryWrites=true&w=majority&appName=SrimathiP';

mongoose.connect(MONGOURI)
.then(()=> console.log('MongoDB is connected'))
.catch((err)=>{
    console.log('DB not connected : ',err);
})


const blog_Schema = new mongoose.Schema({
    title: {type: String, required:true},
    content: {type: String, required:true},
    imageUrl: {type: String},
    likes: {type: Number, default:0},
    views: {type: Number, default:0},
    comments: [{type:String , default:[]}],
})

const blog_Model = mongoose.model('Blogs',blog_Schema);

app.get('/blogs',async (req,res)=>{
    try{
        const data =await blog_Model.find();
        res.status(200).json(data);
    }
    catch{
        console.log("Error fetching data!");
        res.status(500).json({message:'Error fetching data'});
    }
})

app.post('/addBlog', async(req,res)=>{
    try{
        const {title,content, imageUrl} = req.body;
        const newBlog = new blog_Model({
            title,
            content,
            imageUrl: imageUrl || 'https://wallpapercave.com/wp/wp7348236.jpg' ,
        });
        await newBlog.save();
        res.status(200).json({message:'Data added successfully',blog:newBlog});
    }
    catch{
        console.log("Error in adding data!");
        res.status(500).json({message:'Error in adding new Data!'});
    }
})


app.patch('/addLike/:id',async(req,res)=>{
    try{
        const blogId = req.params.id;
        const blog = await blog_Model.findById(blogId);
        if(!blog)
        {
            return res.status(500).json({message:'No such Blog'});
        }
        blog.likes +=1;
        blog.save();
        res.status(200).json({message:'Successfully added Like!'});
    }
    catch(err){
        res.status(500).json({message:'Error in adding like!'});
    }
})

app.patch('/addView/:id',async(req,res)=>{
    try{
        const blogId = req.params.id;
        const blog = await blog_Model.findById(blogId);
        if(!blog)
        {
            return res.status(500).json({message:'No such Blog'});
        }
        blog.views +=1;
        blog.save();
        res.status(200).json({message:'Successfully added View!'});
    }
    catch(err){
        res.status(500).json({message:'Error in adding Views!'});
    }
})

app.delete('/deleteBlog/:id',async (req,res)=>{
    
    try{
        const blogId = req.params.id;
        const response =  await blog_Model.findByIdAndDelete(blogId);
        console.log(response.title," Blog deleted!");
        res.status(200).json({message:'Successfully Deleted'});
    }
    catch{
        res.status(500).json({message:'Internal Server Error in deleting!'});
    }
})

app.put('/editBlog/:id',async(req,res)=>{
    try{
        const {title,content,imageUrl,likes,views} = req.body;
        const response = await blog_Model.findByIdAndUpdate(req.params.id,{title,content,imageUrl,likes,views});
        res.status(200).json({message:'Blog updated'});
        console.log(response);
    }
    catch{
        res.status(500).json({message:'Internal Server Error in updating'});
    }
})

app.get('/blog/:id',async(req,res)=>{
    
    try{
        const blogId = req.params.id;
        const blogDetail = await blog_Model.findById(blogId);
        console.log(blogDetail);
        if(!blogDetail)
        {
            return res.status(500).json({message:'No such Blog'});
        }
        res.status(200).json({message:'Successfully retrieved Blog',blog:blogDetail});
    }
    catch{
        res.status(500).json({message:'Internal server error in retrieving blog!'});
    }
})



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})
