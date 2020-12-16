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

// http://localhost:5000/api/v1/mscamps
router.route("/").get(getMsCamps).post(createMsCamp);

// http://localhost:5000/api/v1/mscamps/:id
router.route("/:id").get(getMsCamp).put(updateMsCamp).delete(deleteMsCamp);


module.exports = router;