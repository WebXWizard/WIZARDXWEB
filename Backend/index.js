
// For Express initial

const express = require('express');
const app = express();




const port = 5000  // Port Number 


//Routing ---

app.get('/', (req,res) => {
    res.send("Hello World")
})



// For Running on Server

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})

