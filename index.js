/*
    Copyright 2021 Viribus LLC & Contributors.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
/*
    Original copy built by Era and Clem.
    Please include notes defining what you are changing.
*/

// Import modules.
const express = require('express');
const hpp = require('hpp');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const session = require('express-session');
const uuid = require('uuid');
/* Yes these modules could be a lot better, so if you'd rather others, feel free to add them! */

var port = process.env.PORT || 80 //Assign the PORT to either the `process` port (For production environments), or locally port 80.

// Configure the app settings.
app.set('port', port);
app.set('view engine', 'ejs');
app.use(hpp());
app.use(helmet({contentSecurityPolicy: false}));
// Although Viribus is open source, we don't want others using the software on other websites.
// For each route you think should be accessible from other websites, manually configure it.
app.use(cors({
    origin: "http://localhost" | "https://viribus.xyz",
    optionsSuccessStatus: 200
}));
// DO NOT CHANGE THE SETTINGS FOR THE SESSION BELOW.
app.use(session({
    cookie:{
        httpOnly: true,
        secure: false,
        sameSite: true
    },
    saveUninitialized: false,
    resave: false,
    proxy: true,
    secret: uuid.v4()
}))