---
title: Caddy
date: 2021-07-23 10:33:16
category:
  - 教程
order: 1
---

# Caddy

<!-- more -->

## 手动安装

### 下载

打开 [下载](https://caddyserver.com/download) 页面，选择对应的平台后点击下载按钮

### 安装

移动下载的二进制文件到 `/usr/bin/`

```bash
$ sudo mv caddy_linux_amd64 /usr/bin/caddy
```

修改 `caddy` 权限

```bash
$ sudo chmod 755 /usr/bin/caddy
```

测试是否有效

```bash
$ caddy version
```

创建一个名为 `caddy` 的组

```bash
$ sudo groupadd --system caddy
```

创建一个名为 `caddy` 且有可写的主目录的用户

```bash
$ sudo useradd --system \
    --gid caddy \
    --create-home \
    --home-dir /var/lib/caddy \
    --shell /usr/sbin/nologin \
    --comment "Caddy web server" \
    caddy
```

### 配置

创建一个名为 `Caddyfile` 的配置文件

```bash
$ sudo mkdir /etc/caddy
$ sudo touch /etc/caddy/Caddyfile
```

`Caddyfile` 内容示例

```
foobar.com, www.foobar.com {
  root * /var/www/foobar.com
  file_server

  encode zstd gzip

  route {
    try_files {path} /index.html
  }
}
```

### 服务

将服务文件下载到 `/etc/systemd/system`

```bash
$ sudo wget -P /etc/systemd/system https://raw.githubusercontent.com/caddyserver/dist/master/init/caddy.service
```

启用 `caddy` 服务

```bash
$ sudo systemctl daemon-reload
$ sudo systemctl enable --now caddy
```

检查是否在运行中

```bash
$ systemctl status caddy
```

### 日志

```bash
$ sudo journalctl -u caddy -f -o json-pretty
```

## Docker Compose

### 设置

创建一个名为 `compose.yml` 的文件，写入以下内容

```yml
services:
  caddy:
    image: caddy:latest
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./site:/srv
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```

在 `compose.yml` 旁边创建一个名为 `Caddyfile` 的配置文件，并写入相关内容。

如果有静态文件，在 `compose.yml` 旁边创建一个名为 `site` 的目录，将静态文件放入其中，然后使用 `root * /srv` 设置根目录。

::: tip 反向代理

如果要反向代理到另一个容器，不要使用 `reverse_proxy localhost:8080` ，而是使用 `reverse_proxy other-container:8080` ，并确保两个容器网络互通

:::

### 用法

启动

```bash
$ docker compose up -d
```

停止

```bash
$ docker compose down
```
