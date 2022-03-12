const express = require("express");
const cors = require('cors');
const app = express();
const config = require('config');
const path = require('path');


const isDev = process.env.NODE_ENV === 'development' ;

if (config.has("enableCors") && config.get("enableCors")) {
    app.use(cors());
}

const HTTP_PORT = process.env.PORT || 8000;

if (isDev) {
    app.listen(HTTP_PORT, () => {
        console.log("Server is listening on port " + HTTP_PORT);
    });
}

const buildPath = path.join(__dirname, "../../web-app/build");
app.use(express.static(buildPath))
// SPA
app.get("/", (req, res) => res.sendFile(path.join(buildPath, "index.html")));

// API
// no endpoints for now

module.exports = app;