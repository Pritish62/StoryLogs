const express = require("express");
const app = express();
let port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid")
const methodOverride = require("method-override");

//Body parser
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),  //ganerate randome id
        username: "pritish",
        content: "Just completed my Node.js + Express project! 🧠 Learned how RESTful routes work and how to structure clean backend code.",
        image: "image/post1.jpg",
    },
    {
        id: uuidv4(),
        username: "Ratindra",
        content: "Designing responsive UI with pure CSS and EJS templates 🎨 Loving how small tweaks make big differences.",
        image: "image/post2.jpg",
    },
    {
        id: uuidv4(),
        username: "Navo",
        content: "Debugged my first major error today 😅 Took 2 hours but the learning was worth it. Never give up on a missing semicolon!",
        image: "image/post3.jpg",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

//Serve the form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

//Add new post
app.post("/posts", (req, res) => {
    let { image, username, content } = req.body;
    let id = uuidv4();
    posts.push({ image, id, username, content });
    res.redirect("/posts");  //redirect to the .get/posts

});

//to get one post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => String(id) === String(p.id));
    if (!post) {
        return res.status(404).send("Page Not Found");
    }
    res.render("show.ejs", { post });
});

//Update specific post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;  //(fixed)  extract id properly
    const { content } = req.body;
    let post = posts.find(p => String(id) === String(p.id));
    post.content = content;  //(Fixed)   // extract content from the body (because the form's textarea has name="content")
    res.redirect("/posts");
});

//serve the edit form
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => String(id) === String(p.id));
    res.render("edit.ejs", { post });

});
//Destroy Rout

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => String(id) !== String(p.id));
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log("server is listening");
});
