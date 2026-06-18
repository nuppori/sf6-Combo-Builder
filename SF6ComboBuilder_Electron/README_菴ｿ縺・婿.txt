SF6ComboBuilder Electron版
==========================

これは「既定ブラウザを開くEXE」ではなく、Electronの専用ウィンドウで起動するデスクトップアプリ版です。

このZIPはビルド用プロジェクトです。
GitHubにアップロードすると、GitHub ActionsでWindows用EXEを自動作成できます。

使い方
------
1. このZIPを解凍する
2. 中身をGitHubリポジトリにアップロードする
   - package.json
   - main.js
   - app/index.html
   - app/assets/*
   - .github/workflows/build-windows.yml
3. GitHubの Actions タブを開く
4. Build Windows EXE を選ぶ
5. Run workflow を押す
6. 完了後、Artifacts から SF6ComboBuilder-Windows-EXE をダウンロードする
7. 中の SF6ComboBuilder-1.0.0.exe を起動する

補足
----
- 初回ビルドには数分かかります。
- 生成されるEXEは未署名なので、Windows SmartScreenの警告が出ることがあります。
- ブラウザのタブではなく、独立したアプリウィンドウで起動します。
