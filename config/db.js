const mongoose = require('mongoose');
const connectDB =async () => {
        const conn = await mongoose.connect(
        process.env.NET_MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log(`MongoDB Conected: ${conn.connection.host}`.blue);
    };

    module.exports = connectDB;


