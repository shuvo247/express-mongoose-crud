const express = require('express');
const mongoose = require('mongoose');
// Initiallize Express Application
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/todos')
    .then(() => console.log('connection successful'),{useNewUrlParser : true})
    .catch((err) => console.log(err));


function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

app.listen(3000,() => {
    console.log("App listending at port 3000");
});