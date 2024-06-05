const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 8000;

app.route("/api/users").get((req,res) =>{
    return res.json(users);
}).post((req,res) =>{
      return res.json({status: "pending"});
    });



get("/api/users", (req,res) =>{
    return res.json(users)
});

app.get("/api/users/:id", (req,res) =>{
   const id = Number(req.params.id);
   const user = users.find((user)=> user.id === id);
   return res.json(user);
});
//   normal response
// app.post("/api/users/", (req,res) =>{
//   return res.json({status: "pending"});
// });

// app.patch("/api/users/", (req,res) =>{
//     return res.json({status: "pending"});
//   });

// app.delete("/api/users/", (req,res) =>{
//     return res.json({status: "pending"});
// });

app.listen(PORT, ()=> console.log("server is started"));