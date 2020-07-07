const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true 
    }
  }) 

  // e carregar o index.html do aplicativo.
  win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

// "start": "nodemon --watch * --exec 'electron .'", //colocar no package.json