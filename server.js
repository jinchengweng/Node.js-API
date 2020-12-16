const express = require("express");
const dotenv = require("dotenv");

//引入路由文件

const mscamps = require("./routes/mscomps.js");

dotenv.config({
    path: "./config/config.env",
});

const app = express();

// http://localhost:5000
app.get("/", (req,res) => {
    //res.send("hola todos ");
    //res.send({msg: "hola todos"})
    //res.json({ success: true});
    //res.sendStatus(400);
    //res.status(400).json({ success: false });
    //res.status(200).json({ success:true, mes: "hola todos"})

});

//挂载路由节点 http://localhost:5000/api/v1/mscamps
app.use("/api/v1/mscamps", mscamps);

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);