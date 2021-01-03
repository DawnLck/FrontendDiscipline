# 修改 Hosts 临时解决 GitHub 的 raw.githubusercontent.com 无法链接的问题

> 本文转自 https://www.ioiox.com/archives/62.html#morphing

## 前言

正值双 11,各大云服务商的活动非常给力,正好给公司添置一台项目服务器,在配置相关环境时,发现 GitHub 的 raw.githubusercontent.com 域名解析竟然因某些你懂的原因给临时污染了.终于通过修改 hosts 解决掉此问题,可以正常部署环境了.

## 解决方法

> 另外一种解决方法可参考 https://ghproxy.com 更详细使用方法

### 查询真实 IP

通过 [IPAddress.com](https://www.ipaddress.com/) 首页,输入 raw.githubusercontent.com 查询到真实 IP 地址
![ip](https://static.ioiox.com/usr/uploads/2019/11/1639029163.jpg)

### 修改 hosts

CentOS 及 macOS 直接在终端输入

```cmd
sudo vi /etc/hosts
```

添加以下内容保存即可

```bash
199.232.4.133 raw.githubusercontent.com
```
