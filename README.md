# youtube-demo
1. Run npm install expo-cli --global (please skip if installed expo-cli)
2. Go to path your project.
2. Run npm install.
3. Run npm start.
4. Download expo app on your mobile and then open App.
5. Scan QR to preview layout.

#Publish App
Config file app.json giống trong hình
http://gyazo.cybridge.jp/0304fa1cda8825820f41ec30388d7f28
Run `expo publish`
Enter account Expo (if system need permission)
if have Error connect ECONNREFUSED 127.0.0.1:19001 (please remove folder .expo) and then run `expo publish` again.

#Build App
Config file app.json allow to below:
http://gyazo.cybridge.jp/207a338d7e4e015bb0ce760ee0519213
Each project need setup maybe different. Read more:
https://docs.expo.io/workflow/configuration/
https://docs.expo.io/distribution/building-standalone-apps/

##Build for Android:
APK (`expo build:android -t apk`) or Android App Bundle (`expo build:android -t app-bundle`)
##Build for iOS: need Apple Developer Account.

*Note:
(Would you like to upload a keystore or have us generate one for you?
If you don't know what this means, let us handle it!
Choose: 1(if you don't understand about it))

Time building can take a couple of minutes, even hours until that happens.