const express = require("express"); //Importamos el módulo express para hacer uso de su función Router
const router = express.Router(); //Al llamar al módulo exprees, nos retorna un objeto. Por lo tanto, utilizamos el método Router para poder utilizar las rutas
const Task2 = require('../models/proyectos.js'); //Importamos la colección tasks que tiene los nombres de los proyectos

router.get("/registrarProyectos", async (req, res) =>{ //Esta ruta llama a la página principal, que sería el index.ejs
    const tasks2 = await  Task2.find();
    res.render("registrarProyectos",{
        tasks2
    });
});
router.get("/registrar", async (req, res) =>{ //Esta ruta llama a la página principal, que sería el index.ejs
    const tasks2 = await  Task2.find();
    res.render("registrarProyectos",{
        tasks2
    });
});

// router.get("/index", async (req, res) =>{ //Esta ruta llamada a la página ordenamiento, que sería el ordenamiento.ejs
//     const tasks2 = await  Task2.find();
//     res.render("index",{
//         tasks2
//     });
// });

router.post("/add2", async (req, res) =>{  //Esta ruta sube los nuevos datos ingresados por el usuario
    const task2 = new Task2(req.body);
    await task2.save();
    res.redirect("/registrarProyectos");
}); 

router.get("/delete2/:id", async (req,res) =>{ //Elimina el elemento seleccionado por el usuario
    const {id} = req.params;
    await Task2.remove({_id: id});
    res.redirect("/registrarProyectos");
});

router.get("/editP/:id", async (req, res) =>{ //Esta ruta llama a la página de edti2 para modificar los criterios y porcentajes, que sería edit.ejs
    const {id} = req.params;
    const tasks2 = await Task2.findById(id);
    res.render("edit2",{
        tasks2
    });
});

router.post("/editP/:id", async (req, res) =>{ //Esta ruta sube los cambios que se hicieron en edit.ejs
    const {id} = req.params;
    await Task2.update({_id: id}, req.body);
    res.redirect("/registrarProyectos");
});
module.exports = router; //Exportamos la ruta seleccionado y la envíamos al app.js