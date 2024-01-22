require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')

})
 app.get('/login', (req,res)=>{
    res.send("Wellcom to Usmania bagh")
 })
 app.get('/signup',(req,res)=>{
    res.send("Haidar Ali Khan")
 })
 app.get('/product', (req,res)=>{
    res.send("Haidar ALi Khan bara ")
 })
 app.get('/fun',(req,res)=>{
    res.send(" <h1> bara ghazipur </h1> ")
 })


app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${port}`)
})