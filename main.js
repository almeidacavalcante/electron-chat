
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
            width: 930,
            minWidth: 930,
            height: 624,
            minHeight: 624,
            frame: false,
            transparent: true
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();
})