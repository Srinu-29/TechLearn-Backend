const express = require("express");
const mongoose = require("mongoose");
const app = express();

const midProjectRoutes = require("./routes/midProjectRoutes");
const UserRoutes = require("./routes/userRoute");
const uiLibraryRoutes = require("./routes/uiLibraryRoutes");
const DBconnect = require('./config/db');
const transactionRoutes = require("./routes/transactionRoutes");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

DBconnect();



app.use(UserRoutes);
app.use(midProjectRoutes);
app.use(uiLibraryRoutes);
app.use(transactionRoutes);



app.listen(4000);