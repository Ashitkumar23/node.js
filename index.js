const express = require("express");
const app = express();
const fs = require("fs")
const users = require("./MOCK_DATA.json");
// const mongoose = require("mongoose");
const { stringify } = require("querystring");
const PORT = 8000;

// connecting mongoose
//  mongoose.connect("mongodb://127.0.0.1:27017/firstdata")
//  .then(()=> console.log("mongoose connected"))
//  .catch((err) => console.log("mongoose not connected", err));

// schema
// const userSchema = mongoose.Schema({
//     first_name:{
//         type: String,
//         require: true
//     },
//     last_name:{
//         type: String,
//         require: false
//     },
//     email:{
//         type: String,
//         require: true
//     },
//     gender:{
//         type: String,
//         require: true
//     },
// });


// mongoose model
// const User = mongoose.model("user", userSchema);

// app.route("/api/users").get((req,res) =>{
//     return res.json(users);
// }).post((req,res) =>{
//       return res.json({status: "pending"});
//     });



app.get("/api/users", (req,res) =>{
    return res.json(users)
});

app.get("/api/users/:id", (req,res) =>{
   const id = Number(req.params.id);
   const user = users.find((user)=> user.id === id);
   return res.json(user);
});

// middleware plugin
app.use(express.urlencoded({extended : false}));



//   normal response
app.post("/api/users/", (req,res) =>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data =>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to write to file' });
        }
        return res.json({status: "done" ,  id: users.length + 1});
    }));
});

app.patch("/api/users/", (req,res) =>{
    return res.json({status: "pending"});
  });

app.delete("/api/users/", (req,res) =>{
    return res.json({status: "pending"});
});

app.listen(PORT, ()=> console.log("server is started"));