---
title: Linux
date: 2022-05-08 22:34:12
category:
  - 教程
order: 2
---

# Linux

<!-- more -->

## 防火墙

查看开放的端口

```bash
$ sudo firewall-cmd --list-ports
```

查看端口状态

```bash
$ sudo firewall-cmd --query-port=6666/tcp
```

添加端口

```bash
$ sudo firewall-cmd --add-port=6666/tcp --permanent
```

重新加载

```bash
$ sudo firewall-cmd --reload
```

移除端口

```bash
$ sudo firewall-cmd --remove-port=6666/tcp --permanent
```

## 定时任务

查看当前用户的 crontab 文件

```bash
$ crontab -l
```

编辑当前用户的 crontab 文件

```bash
$ crontab -e
```

移除当前用户的 crontab 文件

```bash
$ crontab -r
```

查看某个用户的 crontab 文件

```bash
$ crontab -u foobar -l
```

编辑某个用户的 crontab 文件

```bash
$ crontab -u foobar -e
```

[在线工具](https://tool.lu/crontab)
