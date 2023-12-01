const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://127.0.0.1:27017/quiz'
const  questionRouter=require("./routes/question.routes")
const  examineeRouter=require("./routes/examinees.routes")

const app=express()

mongoose.set('strictQuery', false)
mongoose.connect(url, {useNewUrlParser:true})

const con=mongoose.connection
con.on('open',()=>console.log('connected to mongodb...'))

app.use(express.json())
app.use('/development',questionRouter)
app.use('/contestent',examineeRouter)

app.listen(9001, () => {
    console.log('Server Started at 9001')
})
