const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());


//import routes

const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);


//middlewares
/* 
app.use('/posts',()=>{
    console.log('this is middleware');
}); */

//routes
app.get('/',(req,res)=>{
    res.send("we are on home");
});



//connect to database
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('Connected to DB!');
})

//listening to server
//app.listen(3000);
const port = process.env.PORT || 3301;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});