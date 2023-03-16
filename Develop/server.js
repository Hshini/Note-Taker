//DEPENDENCIES
const fs =  require ('fs');
const express = require ('express')

const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json());
app.use (express.urlencoded({extended:true}))

//ROUTES

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('api/notes',(req,res)=>{
res.json(db.json)
}
)

app.post('api/notes',(req,res)=>{
})

app.listen(PORT, () => {
    console.log("app listening at http://localhost:${PORT}`")
})