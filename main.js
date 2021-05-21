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
const express = require('express'), hpp = require('hpp'), helmet = require('helmet'), app = express(), cors = require('cors'), session = require('express-session') /* i know its not the best but if you have better options feel free to put them in*/, uuid = require('uuid')

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
// Set the views directory to /src/views, and set the static folder.
// In express, when we create a static function assigned to a folder, we no longer have to declare the folder name, instead declare the file/folder inside it.
// Example:
// app.use(express.static('public'))
// # Then inside the frontend...
// <link rel='stylesheet' href='/path/inside/of/public/without/the/public/part'>
// Read more: http://expressjs.com/en/4x/api.html#express.static
app.use(express.static('public'));
app.set('views', './src/views');

// For our public API (Only GET functions (read more at /API/README.md)), we store all the functions inside another folder for easier storage.
// If you are someone in here only to make changes to the module/wrappers, please use our OTHER repositories for that.

require('./src/API/source/main.js')

// Here we will do all of the GET functions.
// As stated above, we will NOT be using ANY POST functions unless they have the default CORS settings enabled.
// That way we can still POST account creation, saved settings, etc.
// To manage the POST functions, it is all available in the folder /API/source/private.

// Get the homepage and render it.

app.get('/', cors(), async (req, res) => {
    res.render('home', {
        req: req,
        res: res
    })
})


app.listen(port, () => {console.log(`[EXPRESS]: Listening on port ${port}`)})