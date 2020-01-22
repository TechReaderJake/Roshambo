const {app, BrowserWindow} = require('electron');  
function createWindow () {   
    // Create the browser window.     
    win = new BrowserWindow({show: false, webPreferences: { nodeIntegration: true }});
    win.maximize();
    // and load the index.html of the app.
    win.loadURL('http://localhost:3000/');
    win.show();
}     
app.on('ready', createWindow);