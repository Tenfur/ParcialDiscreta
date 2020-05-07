const mongoose = require("mongoose"); //Llamamos al módulo mongoose
const Schema = mongoose.Schema; 

const TaskSchema = new Schema ({
    criterio: String,
    porcentajeCriterio: Number,
    status:{
        type: Boolean,
        default: false
    }
});
    
module.exports = moongose.model("tasks2", TaskSchema); //Exportamos la colección de tasks que contiene los criterios y porcentajes