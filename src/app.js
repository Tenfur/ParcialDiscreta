//Modules
const express = require("express"); //Framework que me facilita la escritura de código
const path = require("path"); //Me ayuda a concatenar las rutas de acuerdo al sitema operativo
const morgan = require("morgan"); // Nos muestra en consola que ruta ha solicitado el usuario
const mongoose = require("mongoose"); //Nos ayuda a definir un esquema del documento y nos permite conoctarnos mongoDb
const app = express(); 

//Connecting to db
mongoose.connect("mongodb://localhost/CRUD") 
    .then(db => console.log("DB CONNECTED"))
    .catch(err => console.log("ERROR"));

//Importing routes
const indexRoutes = require("./routes/index") //Llamamos la ruta que el usuario selecciona

//Settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

//Middlewares
app.use(morgan("dev"));  
app.use(express.urlencoded({extended: false})); 

//Routes
app.use("/", indexRoutes); //Usamos la ruta importada

//Starting the server
app.listen(app.get("port"), () =>{ 
    console.log(`Server on port ${app.get("port")}`);
})