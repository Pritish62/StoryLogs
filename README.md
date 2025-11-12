📝 StoryLogs — A Mini Social Media Post App

StoryLogs is a lightweight web app built with Node.js, Express, and EJS, where users can create, edit, view, and delete posts — just like a mini blogging platform.
It’s a great demonstration of RESTful routes, Express middleware, and dynamic EJS templates.

🚀 Features

🧩 Create new posts with username and content

👀 View individual post details on a separate page

✏️ Edit existing posts dynamically

❌ Delete posts instantly using method override

💬 Clean and responsive UI built with EJS and CSS

🆔 Unique post IDs generated using uuid

🌈 Organized file structure and templating

📁 Static assets served via Express (public/ folder)

(Image upload feature coming soon — will be added after MongoDB integration)

-----------------------------------------------------------------------------------

| Technology                    | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| **Node.js**                   | JavaScript runtime environment               |
| **Express.js**                | Backend framework for routing and middleware |
| **EJS (Embedded JavaScript)** | Template engine for rendering dynamic pages  |
| **method-override**           | Enables PUT/PATCH/DELETE requests from forms |
| **UUID**                      | Generates unique post IDs                    |
| **CSS3**                      | Custom styling and layout                    |
| **HTML5**                     | Structure and templating                     |

--------------------------------------------------------------------------------
Routes are fully RESTful:

GET /posts — Show all posts

GET /posts/new — Form to create new post

POST /posts — Create a post

GET /posts/:id — View a specific post

GET /posts/:id/edit — Form to edit

PATCH /posts/:id — Update a post

DELETE /posts/:id — Delete a post

------------------------------------------------------------------------------
📦 Future Enhancements

🖼️ Image upload system using Multer

💾 MongoDB database integration

🔐 User authentication system

🌍 Deploy on Render / Vercel / Railway

📱 Responsive mobile-friendly design

-------------------------------------------------------------------------------

💡 Learning Outcomes

Understanding of RESTful APIs

Using method override for non-GET/POST requests

EJS templating with dynamic data

Serving static files with Express

Clean route and view structure

-------------------------------------------------------------------------------

👨‍💻 Author

Pritish Mandal
📍 B.Tech CSE (AI & ML) Student
💬 Passionate about full-stack web development and backend engineering.
