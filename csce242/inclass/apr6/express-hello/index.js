const express = require("express");
const app = express();
app.use(express.static('public'));


/*app.get('/', (req, res)=>{
    res.send("hello world");
});*/

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/api/cakes', (req, res)=>{
    cakes = ["red velvet", "black forest", "cheesecake"];
    res.send(cakes);
})

app.listen(3000, (any)=>{
    console.log("listening on port 3000");
});