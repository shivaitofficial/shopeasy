const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name="IT";
app.get("/",(req,res) => {
    res.send(`Welcome to ShopEasy Shiva ${name} Official !!!!`);
})
const server = app.listen(PORT,() =>{
    console.log(`Server is Running on port ${PORT}`);
})

module.exports = {app,server,name}