const { app, BrowserWindow, Menu, shell, session } = require('electron');
const path = require('path');

function createWindow() {
  Menu.setApplicationMenu(null);

  // Clipboard API を許可。画像コピーで必要になる場合があります。
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    const allowed = [
      'clipboard-read',
      'clipboard-write',
      'clipboard-sanitized-write'
    ];
    callback(allowed.includes(permission));
  });

  const win = new BrowserWindow({
    width: 1100,
    height: 820,
    minWidth: 380,
    minHeight: 640,
    title: 'SF6 コンボアイコン作成ツール',
    backgroundColor: '#0f1118',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  // 万が一リンクが開かれる場合も、アプリ内で迷子にならないよう外部扱いにします。
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
