//DEPENDENCIES
const fs =  require ('fs');
const express = require ('express')

const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
//MIDDLEWARE
app.use(express.json());
app.use (express.urlencoded({extended:true}))
app.use(express.static('public'))
//ROUTES


app.get('/notes',(req,res)=>
    res.sendFile(path.join(__dirname, "/public/notes.html"))
)


app.get('/api/notes',(req,res)=>{
    fs.readFile( './db/db.json', function(error,dataResults){
        if(error){
           throw error
        }
        else{
            res.send(dataResults)
        }
        
    } )
       
}
)

app.post('/api/notes',(req,res)=>{
//convert 
    const data=req.body
    
    fs.writeFile( './db/db.json', data, function(error) {
        if(error){
            throw error
        }
        data.
        res.json("File Succesfuly Created")
    })

})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
    console.log("app listening at http://localhost:${PORT}`")
})
