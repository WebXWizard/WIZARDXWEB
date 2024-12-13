const mongoose = require('mongoose');
const url ="mongodb+srv://alamshahe9044:bca172023@cluster0.dv1mw.mongodb.net/DIY-INNOVATION?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;
