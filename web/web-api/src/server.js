'use strict';

const path = require('path');
var app = require('./index.js');

require('greenlock-express')
    .init({
        packageRoot: path.join( __dirname, ".."),

        // contact for security and critical bug notices
        maintainerEmail: "jon@example.com",

        // where to look for configuration
        configDir: './config/greenlock.d',

        // whether or not to run at cloudscale
        cluster: false
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);
