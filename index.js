const express = require("express");
const app = express(); 
let port = 8080;
const path = require("path");

app.use(express.urlencoded({express : true}));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "pritish",
        content: "I Love coding",
    },
     {
        username: "Ratindra",
        content: "I am a Student",
    },
     {
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
    posts.push({ username , content });
    res.redirect("/posts");
    console.log(req.body);
    
});
app.listen(port, () => {
    console.log("server is listening");
});
