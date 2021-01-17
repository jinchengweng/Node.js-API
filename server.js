const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error.js");
const cookieParser = require("cookie-parser");

//引入路由文件
const mscamps = require("./routes/mscomps.js");
const courses = require("./routes/courses.js");
const auth = require("./routes/auth.js");

dotenv.config({
    path: "./config/config.env",
});

//conectar a base de datos 
connectDB();

const app = express();

//config body express
app.use(express.json());

// usar morgan
app.use(morgan("dev"));

//usar cookie
app.use(cookieParser());

//挂载路由节点 http://localhost:5000/api/v1/mscamps
app.use("/api/v1/mscamps", mscamps);
app.use("/api/v1/courses", courses);
app.use("/api/v1/auth", auth);

//一定要写在路由挂载之前
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
    .bold
    )
);

process.on("unhandledRejection", (err,promise) => {

    console.log(`Error: ${err.message}`.red.bold);
    //cerra el servidor & exit
    server.close(() => {
        process.exit(1);
    });
})
