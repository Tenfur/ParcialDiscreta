const mongoose = require("mongoose"); //Llamamos al módulo mongoose
const Schema = mongoose.Schema; 

const TaskSchema2 = new Schema({ //Creamos la estructura del documento
    criterio: String,
    porcentajeCriterio: Number,
    status: { 
        type: Boolean,
        default: false
    }
});


module.exports = moongose.model("tasks2", TaskSchema2); //Exportamos la colección de tasks que contiene los criterios y porcentajes