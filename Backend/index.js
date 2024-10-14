const express = require('express');
const app = express();
const port = 5000;

const UserRouter = require('./routers/user');
// const ProductRouter = require('./routers/product')


// middleware
app.use(express.json())

app.use('/user', UserRouter);

// app.use('/product', ProductRouter)


app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})