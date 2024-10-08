const express = require('express');
const app = express();


// For Express initial

const port = 5000



app.get('/', (req,res) => {
    res.send("Hello World")
})



// For Running on Server

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})

