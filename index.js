const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send("It's my phone server");
})

app.get('/phones', (req, res) => {
    res.send("Your phone server");
})

app.get('/phones/:id', (req, res) =>{
    const id = Number(req.params.id);
    console.log(`I need data for id :${id}`)
})

app.listen(port, () => {
    console.log(`My phone server is running on port : ${port}`);
}) 
