let express = require("express")
let router = express.Router();
let tareasController = require("../controllers/tareas-controller");

/*router.get("/", (req, res) => {
    res.send("Hola mundo..probando GET..1..2...3");
});*/

router.get("/", tareasController.getAllTareas);
router.post("/", tareasController.createTarea);
router.put("/:id", tareasController.updateTarea);
router.delete("/:id", tareasController.deleteTarea);

module.exports = router;