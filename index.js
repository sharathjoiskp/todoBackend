const express = require('express');
const mongoose = require('mongoose');

const taskRoute = require('./routes/task_route.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/tasks", taskRoute);

mongoose.connect("mongodb+srv://sharathjoiskp:1234@todoappbackend.3dxb2lz.mongodb.net/TODOBackendAPI?retryWrites=true&w=majority&appName=todoAppBackend")
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log('Server running on port', PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to DB", error);
    });
