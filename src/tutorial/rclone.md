---
title: Rclone
date: 2024-06-11 09:38:00
category:
  - 教程
order: 4
---

# Rclone

<!-- more -->

## 安装

Linux/macOS/BSD

```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

## 创建 Client ID 和 Client Secret

打开 [Google API Console](https://console.developers.google.com) ，选择一个项目或者创建一个新项目

1. 点击 `启用 API 和服务`

![步骤1](/assets/images/tutorial/rclone/01.png)

2. 找到 `Google Drive API` 并点击

![步骤2](/assets/images/tutorial/rclone/02.png)

3. 点击 `启用`

![步骤3](/assets/images/tutorial/rclone/03.png)

4. 依次点击 `凭据` 和 `配置同意屏幕`

![步骤4](/assets/images/tutorial/rclone/04.png)

5. 选择 `External` 后点击 `创建`

![步骤5](/assets/images/tutorial/rclone/05.png)

6. 输入 `应用名称` 和 `用户支持电子邮件`

![步骤6](/assets/images/tutorial/rclone/06.png)

7. 输入 `电子邮件地址` 后点击 `保存并继续` ，然后再次点击 `保存并继续`

![步骤7](/assets/images/tutorial/rclone/07.png)

8. 点击 `ADD USERS` 后输入自己的账号，然后点击 `添加` ，再点击 `保存并继续`

![步骤8](/assets/images/tutorial/rclone/08.png)

9. 依次点击 `凭据` 、 `创建凭据` 和 `OAuth 客户端 ID`

![步骤9](/assets/images/tutorial/rclone/09.png)

10. `应用类型` 选择 `桌面应用` ，输入 `名称` 后点击 `创建`

![步骤10](/assets/images/tutorial/rclone/10.png)

11. 记下 `客户端 ID` 和 `客户端密钥`

![步骤11](/assets/images/tutorial/rclone/11.png)

12. 依次点击 `OAuth 权限请求页面` 、 `PUBLISH APP` 和 `确认`

![步骤12](/assets/images/tutorial/rclone/12.png)

[官方文档](https://rclone.org/drive/#making-your-own-client-id)

## 新建远程

1. 运行 `rclone config` 进入交互式配置会话后输入 `n`

```text{1,6}
root@localhost:~# rclone config
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

2. 输入名称

```text{2}
Enter name for new remote.
name> google-drive
```

3. 找到 `Google Drive` 并输入对应的数字，当前为 `17`

```text{7,12}
Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
...
16 / Google Cloud Storage (this is not Google Drive)
   \ (google cloud storage)
17 / Google Drive
   \ (drive)
18 / Google Photos
   \ (google photos)
...
Storage> 17
```

4. 输入前面记下的 `客户端 ID` 和 `客户端密钥`

```text{7,13}
Option client_id.
Google Application Client Id
Setting your own is recommended.
See https://rclone.org/drive/#making-your-own-client-id for how to create your own.
If you leave this blank, it will use an internal key which is low performance.
Enter a value. Press Enter to leave empty.
client_id> 831060968648-*******************************9.apps.googleusercontent.com

Option client_secret.
OAuth Client Secret.
Leave blank normally.
Enter a value. Press Enter to leave empty.
client_secret> GOCSP***************************Dxe
```

5. 输入 `1`

```text{19}
Option scope.
Comma separated list of scopes that rclone should use when requesting access from drive.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Full access all files, excluding Application Data Folder.
   \ (drive)
 2 / Read-only access to file metadata and file contents.
   \ (drive.readonly)
   / Access to files created by rclone only.
 3 | These are visible in the drive website.
   | File authorization is revoked when the user deauthorizes the app.
   \ (drive.file)
   / Allows read and write access to the Application Data folder.
 4 | This is not visible in the drive website.
   \ (drive.appfolder)
   / Allows read-only access to file metadata but
 5 | does not allow any access to read or download file content.
   \ (drive.metadata.readonly)
scope> 1
```

6. 按 <kbd>Enter</kbd> 键跳过

```text
Option service_account_file.
Service Account Credentials JSON file path.
Leave blank normally.
Needed only if you want use SA instead of interactive login.
Leading `~` will be expanded in the file name as will environment variables such as `${RCLONE_CONFIG_DIR}`.
Enter a value. Press Enter to leave empty.
service_account_file>
```

7. 输入 `n` 或者按 <kbd>Enter</kbd> 键使用默认值 `n`

```text{4}
Edit advanced config?
y) Yes
n) No (default)
y/n> n
```

8. 输入 `n`

```text{8}
Use web browser to automatically authenticate rclone with remote?
 * Say Y if the machine running rclone has a web browser you can use
 * Say N if running rclone on a (remote) machine without web browser access
If not sure try Y. If Y failed, try N.

y) Yes (default)
n) No
y/n> n
```

9. 找到高亮的部分并粘贴到本地终端运行

```text{7}
Option config_token.
For this to work, you will need rclone available on a machine that has
a web browser available.
For more help and alternate methods see: https://rclone.org/remote_setup/
Execute the following on the machine with the web browser (same rclone
version recommended):
        rclone authorize "drive" "eyJjbGll***************************************************************************************************************************************************************************************************yaXZlIn0"
Then paste the result.
Enter a value.
config_token>
```

10. 在打开的浏览器页面中登录，然后依次点击 `高级` 和 `转至xxxxxx（不安全）`

![步骤10](/assets/images/tutorial/rclone/13.png)

11. 点击 `继续`

![步骤11](/assets/images/tutorial/rclone/14.png)

12. 出现 `Success!` 后回到本地终端，找到高亮的部分并粘贴到服务器上

```text{2}
Paste the following into your remote machine --->
eyJ0b2tl************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************MFwifSJ9
<---End paste
```

13. 输入 `n`

```text{5}
Configure this as a Shared Drive (Team Drive)?

y) Yes
n) No (default)
y/n> n
```

14. 输入 `y` 或者按 <kbd>Enter</kbd> 键使用默认值 `y`

```text{13}
Configuration complete.
Options:
- type: drive
- client_id: 831060968648-*******************************9.apps.googleusercontent.com
- client_secret: GOCSP***************************Dxe
- scope: drive
- token: {"access_token":"ya29.a0A**********************************************************************************************************************************************************************************************************vkRw0171","token_type":"Bearer","refresh_token":"1//0gsFa***************************************************************************************nTLPIcyo","expiry":"2024-06-11T09:38:00.000000+08:00"}
- team_drive:
Keep this "google-drive" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

15. 输入 `q` 退出交互式配置会话

```text{14}
Current remotes:

Name                 Type
====                 ====
google-drive         drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
