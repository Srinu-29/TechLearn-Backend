const express = require("express");
const mongoose = require("mongoose");
const app = express();

const midProjectRoutes = require("./routes/midProjectRoutes");
const UserRoutes = require("./routes/userRoute");
const uiLibraryRoutes = require("./routes/uiLibraryRoutes");
const DBconnect = require('./config/db');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBconnect();



app.use(UserRoutes);
app.use(midProjectRoutes);
app.use(uiLibraryRoutes);



app.listen(4000);