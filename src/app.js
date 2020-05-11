//Modules
const express = require("express"); //Framework que me facilita la escritura de código
const path = require("path"); //Me ayuda a concatenar las rutas de acuerdo al sitema operativo
const morgan = require("morgan"); // Nos muestra en consola que ruta ha solicitado el usuario
const mongoose = require("mongoose"); //Nos ayuda a definir un esquema del documento y nos permite conoctarnos mongoDb
const app = express(); 
const http = require("http");
http.createServer(app);
const server = http.createServer(app);

//Connecting to db
mongoose.connect("mongodb://mongodb+srv://paolo:paolo123@cluster0-ivsqq.mongodb.net/test?retryWrites=true&w=majority") 
    .then(db => console.log("DB CONNECTED"))
    .catch(err => console.log("ERROR"));

//Settings
app.set('port', process.env.PORT ||  3000);
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

//Middlewares
app.use(morgan("dev"));  
app.use(express.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, "public")));


//Routes
app.use(require("./routes/index"));
app.use(require("./routes/index2"));

//Starting the servernpm 
server.listen(app.get("port"), () =>{ 
    console.log(`Server on port 3000`);
})
