const express = require("express"); //Importamos el módulo express para hacer uso de su función Router
const router = express.Router(); //Al llamar al módulo exprees, nos retorna un objeto. Por lo tanto, utilizamos el método Router para poder utilizar las rutas
const Task = require("../models/task"); //Importamos la colección tasks que tiene los nombres de los proyectos

router.get("/", async (req, res) =>{ //Esta ruta llama a la página principal, que sería el index.ejs
    const tasks = await  Task.find();
    res.render("index",{
        tasks
    });
});

router.post("/add", async (req, res) =>{  //Esta ruta sube los nuevos datos ingresados por el usuario
    const task = new Task(req.body);
    await task.save();
    res.redirect("/");
}); 

router.get("/ordenar", async(req, res)=>{ //Esta ruta llamada a la página ordenamiento, que sería el ordenamiento.ejs
    const tasks = await  Task.find();
    res.render("ordenamiento",{
        tasks
    });
});

router.get("/edit/:id", async (req, res) =>{ //Esta ruta llama a la página de edti2 para modificar los criterios y porcentajes, que sería edit.ejs
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render("edit",{
        task
    });
});

router.post("/edit/:id", async (req, res) =>{ //Esta ruta sube los cambios que se hicieron en edit.ejs
    const {id} = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect("/");
});

router.get("/edit2/:id", async (req, res) =>{ //Esta ruta llama a la página de edti2 para modificar el nombre del proyecto, que sería edit2.ejs
    const {id} = req.params;
    const task = await Task.findById(id);
    res.render("edit2",{
        task
    });
});
router.post("/edit2/:id", async (req, res) =>{ //Esta ruta sube los cambios que se hicieron en edit2.ejs
    const {id} = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect("/");
});


router.get("/delete/:id", async (req,res) =>{ //Elimina el elemento seleccionado por el usuario
    const {id} = req.params;
    await Task.remove({_id: id});
    res.redirect("/");
});


module.exports = router; //Exportamos la ruta seleccionado y la envíamos al app.js