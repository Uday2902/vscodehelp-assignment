require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const connectDB = require('./db/connectDB')
// const controllers = require('./controllers/index');
const routes = require('./routes/index');

app.use('/doctor', routes.doctorInfo)
app.use('/bookSlot', routes.bookSlots)

app.listen(PORT, async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        console.log("Connected with database successfully");
        console.log(`Server is running at : http://localhost:${PORT}`);
        // Run this intialization function only once then comment it, because this will initialize some dummy information and add these information in database.
        // await controllers.initialization();
    }catch(err){
        console.log("Error while connecting to database",err)
    }
});
