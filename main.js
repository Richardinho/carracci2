const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [{ role: "about" }],
    },
    {
      label: "File",
      submenu: [
        {
          label: "Create Diagram",
          click: () => {
            console.log("create a diagram");
          },
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  win.loadFile("./web/index.html");

  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
