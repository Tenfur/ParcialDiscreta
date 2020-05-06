//Modules
const express = require("express");
const path = require("path"); //Me ayuda a concatenar las rutas de acuerdo al sitema operativo
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

//Connecting to db
mongoose.connect("mongodb://localhost/CRUD") 
    .then(db => console.log("DB CONNECTED"))
    .catch(err => console.log("ERROR"));

//Importing routes
const indexRoutes = require("./routes/index")

//Settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(morgan("dev"));  
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/", indexRoutes);

//Starting the server
app.listen(app.get("port"), () =>{
    console.log(`Server on port ${app.get("port")}`);
})