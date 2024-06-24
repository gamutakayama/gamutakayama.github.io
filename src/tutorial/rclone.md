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

### Google Drive

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
