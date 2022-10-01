const { response } = require("express");
const express = require("express");
const app = express()
const PORT = 3000;
const blogModule = require("./blog");

app.get("/",(request,response)=> {
    response.send("Hello World");
})

app.get("/list",(request,response)=>{
    const blogData = blogModule.blogList();
    console.log(blogData);
    response.send("List is Empty");
})
app.get("/sandalwoodlist",(request,response)=>{
    const sandalwooddata = blogModule.Sandalwoodlist;
    console.log(sandalwooddata);
    response.send("you are a steady learner");
})
app.listen(PORT ,()=>{
    console.log("Server is Running")
} )