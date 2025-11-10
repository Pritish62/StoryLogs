const express = require("express");
const app = express(); 
let port = 8080;
const path = require("path");
const {v4: uuidv4 } = require("uuid")
const methodOverride = require("method-override");



app.use(express.urlencoded({express : true}));
app.use(methodOverride('__method'));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username: "pritish",
        content: "I Love coding",
    },
     {
        id : uuidv4(),
        username: "Ratindra",
        content: "I am a Student",
    },
     {
        id : uuidv4(),
        username: "Navo",
        content: "Hey How are you",
    },
];

app.get("/posts", (req, res)=> {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts" , (req , res) => {
    let { username , content } = req.body;
    let id = uuidv4();
    posts.push({id, username , content });
    res.redirect("/posts");
    
});

app.get("/posts/:id" , (req , res) => {
    let {id} = req.params;

    let post = posts.find(p => String(id) === String(p.id));
    if(!post){
        return res.status(404).send("Page Not Found");
    }
    res.render("show.ejs" , { post });
});

app.patch("/posts/:id" , (req , res) => {
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find(p => String(id) === String(p.id));
    post.content = newcontent;
    res.send("patch request is working");
});

app.get("/posts/:id/edit" , (req, res) => {
    let {id} = req.params.id;
    let post = posts.find(p => String(id) === String(p.id));
    res.render("edit.ejs");

});
app.listen(port, () => {
    console.log("server is listening");
});
