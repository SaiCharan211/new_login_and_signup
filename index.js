const express=require('express')
const cors=require("cors")
const mongoose =require("mongoose")

const EmployeeModel=require('./Employes')
const app =express()

require('dotenv').config()
app.use(cors())
app.use(express.json())

//mongoose.connect("mongodb://localhost:27017/NewEmployee")
//mongoose.connect("mongodb+srv://saicharan:saicharan@cluster0.hdftqcp.mongodb.net/NewEmployee?retryWrites=true&w=majority&appName=Cluster0")
//mongoose.connect(process.env.MONGO_URL)


app.post('/',(req,res)=>{
     EmployeeModel.create(req.body)
     
     .then(employees01=>res.json(employees01))
     .catch(err=>res.json(err))
});

app.post('/login',(req,res)=>{
     const {email,password}=req.body;
     EmployeeModel.findOne({email:email,password:password})
     .then(user=>{
          if(user){
               if(user.password===password){
                    res.json("Success")
               }else{
                    res.json("Password didn't match")
               }
          }else{
               res.json("No record found")
          }
     })
})
app.listen(process.env.PORT,console.log("server running"))