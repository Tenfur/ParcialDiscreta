const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    proyecto: String,
    criterio: String,
    porcentajeCriterio: Number,
    status: {
        type: Boolean,
        default: false
    }
});
    
module.exports = mongoose.model("tasks", TaskSchema);