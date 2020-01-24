const {app, BrowserWindow} = require('electron');  
// const path = require("path")
// const isDev = require("electron-is-dev")

function createWindow () {   
    // Create the browser window.     
    // win = new BrowserWindow({show: false, 
    //     webPreferences: { 
    //         nodeIntegration: true,
    //         webSecurity: !IDBVersionChangeEvent,
    //         preload: __dirname + '/preload.js'
    //     }, frame: isDev
    // });
    win = new BrowserWindow({show: false, 
        webPreferences: { 
            nodeIntegration: true,
        }
    });
    win.maximize();
    // and load the index.html of the app.
    win.loadURL("http://localhost:3000")
    // win.loadURL(isDev
    //     ? "http://localhost:3000"
    //     : `file://${path.join(__dirname, "../build/index.html")}`
    // );
    win.show();
}     
app.on('ready', createWindow);