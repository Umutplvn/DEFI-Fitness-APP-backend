"use strict"
/* -------------------------------------------------------
    EXPRESSJS - DEFI Project
------------------------------------------------------- */

const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST

/*--------------------------------------*/

app.use(express.json())
app.use(require('cors')())

/*--------------------------------------*/
//! Connect to MongoDB with Mongoose:
require('./src/configs/dbConnection')

//!
app.use(require("./src/middlewares/authorization"));

/*--------------------------------------*/
//! Searching&Sorting&Pagination:
app.use(require('./src/middlewares/findSearchSortPage'))

/*--------------------------------------*/
//! Home Page

app.all('/', (req, res)=>{
    res.send({
        err:false,
        message:'Welcome to Chat APP',
    })
})


/*--------------------------------------*/
//! Routes:
app.use("/users", require("./src/routes/user"))
app.use("/auth", require("./src/routes/auth"))
app.use("/profile", require("./src/routes/profile"))
app.use("/", require("./src/routes/chat"))
app.use("/", require("./src/routes/message"))
app.use("/blog", require("./src/routes/blog"))
app.use("/comment", require("./src/routes/comment"))



/*--------------------------------------*/
//! errorHandler:
app.use(require('./src/errorHandler'))


/*--------------------------------------*/
app.listen(PORT, ()=>console.log(`App is running: ${HOST}:${PORT} `))