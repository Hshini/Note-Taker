//DEPENDENCIES
const fs = require('fs');
const express = require('express')
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const { json } = require('express');
//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//ROUTES

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, "/public/notes.html"))
)


app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', function (error, dataResults) {
        if (error) {
            throw error
        }
        else {
            res.send(dataResults)
        }

    })

}
)

app.post('/api/notes', (req, res) => {
    const { title, text } = req.body
    let id = {
        title,
        text,
        id: uuidv4()
    }

    fs.readFile('./db/db.json', function (error, dataResults) {
        if (error) {
            console.log(error)
        }
        const data= JSON.parse(dataResults)
        data.push(id)


        const dataString = JSON.stringify(data)
        fs.writeFile('./db/db.json', dataString, function (error) {

            if (error) {
                throw error
            }
            

            res.send("File Succesfuly Created")
        })

    })

})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
    console.log("app listening at http://localhost:${PORT}`")
})
