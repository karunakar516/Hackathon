const express = require('express')
const mongoose = require('mongoose');
const {postRouter} = require('./Routes/post.route.js');
const {authRouter} = require("./Routes/auth.route")
const {contentRouter}=require("./Routes/content.route")
const app = express()
const port = 8000
const cors = require('cors')

require('dotenv').config(); 
//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/posts",postRouter);
app.use("/api/auth/",authRouter);
app.use("/api/content/",contentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

mongoose.connect(process.env.MONGOOSE_URI)
  .then(() =>{
    console.log("Connected to DB");
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
      })
  })
  .catch(()=> console.log("connection failed"))



