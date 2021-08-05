const bodyParser = require("body-parser");
const express = require("express");
const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) =>
{res.json({message:"Vítejte v aplikaci"});
});


require("./routes/customer.routes.js")(app);

app.listen(8080, ()=>{
    console.log("Server běží na portu 8080");
})
