const mongoose = require("mongoose"); //Llamamos al módulo mongoose
const Schema = mongoose.Schema; //Cómo vamos a definir los datos

const TaskSchema = new Schema({ //Creamos la estructura del documento
    Nproyecto: String,
    status: { 
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("tasks2", TaskSchema); //Exportamos la colección tasks que contiene los nombres de proyecto 