const express = require("express");
const router = express.Router({mergeParams: true });

//obtener el controlador 
const { getCourses,
        getCourse,
        addCourse,
        updateCourse,
        deleteCourse 
    } = require("../controllers/courses.js");

const { protect } = require("../middleware/auth.js")

const advancedResults = require("../middleware/advancedResults.js");
const Course = require("../models/Course.js");

// http://localhost:5000/api/v1/Courses
router.route("/").get(advancedResults(Course,{
    path: "mscamp",
    select: "name description",
}),getCourses
).
post(protect, addCourse);

// http://localhost:5000/api/v1/Courses/:_id
router.route("/:id")
.get(getCourse)
.put(protect,updateCourse)
.delete(protect,deleteCourse);


module.exports = router;