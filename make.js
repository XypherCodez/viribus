const fs = require('fs');
const os = require('os');
const { pid } = require('process');
const config = require('./src/API/modules/config.json')
let str = ``;
let ms = (new Date()).getUTCMilliseconds();
str += `------ Viribus Build Process ------`
str += `${(new Date()).toUTCString()}: [OK] Starting build process.\n`
let a = fs.existsSync('./src/config/base.json');
if(!a){
    str += `${(new Date()).toUTCString()}: [BAD] No base.json file found.\n`
    return build();
} else {
    str += `${(new Date()).toUTCString()}: [OK] Base.json file found.\n`;
    str += `${(new Date()).toUTCString()}: [...] Updating Base.json\n`;
    str += `${(new Date()).toUTCString()}: [OK] Starting build process.\n`
    const desired = process.version
    str += `${(new Date()).toUTCString()}: [OK] Node.JS running on ${desired}\n`
    let port = process.env.PORT || 80;
    str += `${(new Date()).toUTCString()}: [OK] The server will run on port ${port}\n`
    let b = fs.existsSync('./src/API/modules/java')
    if(b){
        str += `${(new Date()).toUTCString()}: [OK] Java API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] Java API not Found.\n`
    }
    let c = fs.existsSync('./src/API/modules/c')
    if(c){
        str += `${(new Date()).toUTCString()}: [OK] C API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] C API not Found.\n`
    }
    let d = fs.existsSync('./src/API/modules/cpp')
    if(d){
        str += `${(new Date()).toUTCString()}: [OK] C++ API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] C++ API not Found.\n`
    }
    let e = fs.existsSync('./src/API/modules/nodejs')
    if(e){
        str += `${(new Date()).toUTCString()}: [OK] Node.JS API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] Node.JS API not Found.\n`
    }
    let f = fs.existsSync('./src/api/modules/python')
    if(f){
        str += `${(new Date()).toUTCString()}: [OK] Python API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] Python API not Found.\n`
    }
    str += `${(new Date()).toUTCString()}: [OK] Loaded API configuration (Global)\n`
    if(!config.enabled){
        str += `${(new Date()).toUTCString()}: [BAD] API turned off.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [OK] API turned on.\n`
    }
    let settings = {
        node: {
            version: desired,
            startScript: "node .",
        },
        server: {
            port: port,
            session: {
                secret: null
            }
        },
        api: {
            modules: {
                java: {
                    available: b,
                    path: './src/API/modules/java'
                },
                c: {
                    available: c,
                    path: "./src/API/modules/c"
                },
                cpp: {
                    available: d,
                    path: "./src/API/modules/cpp"
                },
                nodejs: {
                    available: e,
                    path: "./src/API/modules/nodejs"
                },
                python: {
                    available: f,
                    path: "./src/API/modules/python"
                }
            },
            src: {
                enabled: config.enabled,
                endpoints: config.endpoints,
                size: config.size,
                supported: config.supported,
                version: config.version,
            }
        },
        process: {
            version: process.version,
            pid: process.pid,
            computer: {
                cpu: os.cpus()[0],
                mem: os.totalmem,
                os: process.platform
            }
        }
    }
    try {
        fs.writeFileSync('./src/config/base.json', JSON.stringify(settings))
        str += `${(new Date()).toUTCString()}: [OK] Imported settings.\n`
        str += `${(new Date()).toUTCString()}: [INFORMATION] Build finished. It took ${ms - (new Date()).getUTCMilliseconds()}.\n`;
        str += `${(new Date()).toUTCString()}: [INFORMATION] Process built at ${__dirname}.\n`
        fs.writeFileSync(`./src/logs/${pid}.log`, str)
    } catch (e){
        console.log(`We couldn't update your base.json file. Thats fine, we will run off of the old information that was provided.`)
    }
    require('./main')
    return;
}
function build(){
    str += `${(new Date()).toUTCString()}: [OK] Starting build process.\n`
    const desired = process.version
    str += `${(new Date()).toUTCString()}: [OK] Node.JS running on ${desired}\n`
    let port = process.env.PORT || 80;
    str += `${(new Date()).toUTCString()}: [OK] The server will run on port ${port}\n`
    let b = fs.existsSync('./src/API/modules/java')
    if(b){
        str += `${(new Date()).toUTCString()}: [OK] Java API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] Java API not Found.\n`
    }
    let c = fs.existsSync('./src/API/modules/c')
    if(c){
        str += `${(new Date()).toUTCString()}: [OK] C API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] C API not Found.\n`
    }
    let d = fs.existsSync('./src/API/modules/cpp')
    if(d){
        str += `${(new Date()).toUTCString()}: [OK] C++ API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] C++ API not Found.\n`
    }
    let e = fs.existsSync('./src/API/modules/nodejs')
    if(e){
        str += `${(new Date()).toUTCString()}: [OK] Node.JS API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] Node.JS API not Found.\n`
    }
    let f = fs.existsSync('./src/api/modules/python')
    if(f){
        str += `${(new Date()).toUTCString()}: [OK] Python API Found.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [BAD] Python API not Found.\n`
    }
    str += `${(new Date()).toUTCString()}: [OK] Loaded API configuration (Global)\n`
    if(!config.enabled){
        str += `${(new Date()).toUTCString()}: [BAD] API turned off.\n`
    } else {
        str += `${(new Date()).toUTCString()}: [OK] API turned on.\n`
    }
    let settings = {
        node: {
            version: desired,
            startScript: "node .",
        },
        server: {
            port: port,
            session: {
                secret: null
            }
        },
        api: {
            modules: {
                java: {
                    available: b,
                    path: './src/API/modules/java'
                },
                c: {
                    available: c,
                    path: "./src/API/modules/c"
                },
                cpp: {
                    available: d,
                    path: "./src/API/modules/cpp"
                },
                nodejs: {
                    available: e,
                    path: "./src/API/modules/nodejs"
                },
                python: {
                    available: f,
                    path: "./src/API/modules/python"
                }
            },
            src: {
                enabled: config.enabled,
                endpoints: config.endpoints,
                size: config.size,
                supported: config.supported,
                version: config.version,
            }
        },
        process: {
            version: process.version,
            pid: process.pid,
            computer: {
                cpu: os.cpus()[0],
                mem: os.totalmem,
                os: process.platform
            }
        }
    }
    str += `${(new Date()).toUTCString()}: [...] Importing settings.\n`;
    try {
        fs.writeFileSync('./src/config/base.json', JSON.stringify(settings));
        addSTR()
    } catch (e) {
        console.log("We couldn't set your configuration settings. Please do it manually by creating a file in the config folder called base.json with the following information.")
        console.log(settings)
        process.exit(0)
    }
}
function addSTR(){
    str += `${(new Date()).toUTCString()}: [OK] Imported settings.\n`;
    str += `${(new Date()).toUTCString()}: [...] Starting express server.\n`;
    str += `${(new Date()).toUTCString()}: [OK] Imported 'main.js'.\n`;
    str += `${(new Date()).toUTCString()}: [OK] Built process.\n`;
    let newms = (new Date()).getUTCMilliseconds()
    str += `${(new Date()).toUTCString()}: [INFORMATION] Process building took ${newms - ms}ms.\n`;
    str += `${(new Date()).toUTCString()}: [INFORMATION] Finished build at ${__dirname}.`
    try {
        fs.writeFileSync(`./src/logs/${process.pid}.log`, str);
    } catch (e) {
        console.log("We couldn't set your configuration settings. Please do it manually by creating a file in the config folder called base.json with the following information.")
        console.log(settings)
        process.exit(0)
    }
    require('./main')
}