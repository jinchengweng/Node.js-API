const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({
    path: "./config/config.env",
});

const Mscamp = require("./models/Mscamp.js");
const Course = require("./models/Course.js");

// conectar a los datos 
mongoose.connect(
    process.env.NET_MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

//leer Datos JSON 
const mscamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data-1/mscamps.json`,"utf-8")
);

//leer Datos JSON 
const courses = JSON.parse(
    fs.readFileSync(`${__dirname}/_data-1/courses.json`,"utf-8")
);

//meter datos mscamps a mongoDB 
const importData = async () => {
    try {
       await Mscamp.create(mscamps);
       await Course.create(courses);
     
       console.log("DATOS GUARDADO".green.inverse);
       process.exit();
    }catch (error) {
        console.log(error);
    }
};

//eliminar Datos de DB
const deleteData = async () => {
    try {
       await Mscamp.deleteMany();
       await Course.deleteMany();
     
       console.log("DATOS ELIMINADO".red.inverse);
       process.exit();
    }catch (error) {
        console.log(error);
    }
};

//console.log(process.argv);
if (process.argv[2] == "-i") {
    importData();
}else if (process.argv[2] == "-d"){
     deleteData();
}