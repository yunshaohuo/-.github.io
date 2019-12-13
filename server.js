const { User }=require('./module')
const express=require('express')

const router=express.Router()
const app=express()
app.use(require('cors')())
app.use(express.json())
app.use('/index',express.static('public'))

app.get('/administrator',async (req,res)=>{
    const users=await User.find()
        res.send(users)
})
app.post('/host',async (req,res)=>{

    const user= await User.create({
        name:req.body.name,
        email:req.body.email,
        text:req.body.text
    })

    res.send(user)

})

app.get('/login',async (req,res)=>{

    const users=await User.find()
    const noUsers=User.db.dropCollection('users')
    res.send(noUsers)
})

app.listen(4000,()=>{
    console.log("http://localhost:4000/index")
})