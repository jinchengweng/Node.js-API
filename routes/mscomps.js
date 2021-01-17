const express = require("express");
const router = express.Router();

//obtener el controlador 
const { 
    getMsCamps,
    createMsCamp,
    getMsCamp,
    updateMsCamp,
    deleteMsCamp,
} = require("../controllers/mscamps.js");

const { protect } = require("../middleware/auth.js")

const advancedResults = require("../middleware/advancedResults.js");
const Mscamp = require("../models/Mscamp.js");

//ruta fija
const courseRouter = require("./courses.js");
router.use("/:mscampId/courses", courseRouter);

// http://localhost:5000/api/v1/mscamps
router
.route("/")
.get( advancedResults(Mscamp, "courses"), getMsCamps)
.post(protect, createMsCamp);

// http://localhost:5000/api/v1/mscamps/:id
router.route("/:id")
.get(getMsCamp)
.put(protect, updateMsCamp)
.delete(protect,deleteMsCamp);


module.exports = router;