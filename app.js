const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.use(express.json())

app.use(require('./routes/SignUp'))
app.use(require('./routes/Login'))
app.get('/', (req, res) => {
    res.send('Home Page')
})
// mongoose.connect('mongodb://localhost:27017/usersystem', {useNewUrlParser: true, useUnifiedTopology: true}).then((value)=>{
//     console.log("connected");
// }).catch((err)=>{
//     console.log("error in connection");
// });
// app.listen(port, () => console.log(`Example app listening on port port!`))

mongoose.connect('mongodb+srv://admin:admin@cluster0.fjtlc.mongodb.net/UserSystem', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('connected');
}).catch(() => {
  console.log('there are error in db');
});
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port port!`))