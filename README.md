# 金滙控股集团官网

金滙控股集团的纯静态多页网站，通过 GitHub Pages 发布。

## 线上地址

- 正式网址：`https://www.jinhui.group`
- 裸域名 `https://jinhui.group` 会自动跳转到 www

## 仓库

- GitHub：`jindotcom26/jinhui-group-website`
- 本地目录：`13-jinhuihealth/jinhui-website`

## 怎么改、怎么发布

1. 直接改本目录下的 `.html` / `css/style.css` / `js/main.js` / `assets/` 里的文件。
2. 双击 `启动预览.command` 在本机浏览器里看效果（改完刷新页面即可）。
3. 满意后双击 `发布更新.command`，输入一句改动说明，回车。
4. 等 1～3 分钟，刷新 https://www.jinhui.group 就是新版本。

## DNS（域名在 Squarespace / 原 Google Domains）

网站相关记录：

| 类型 | 主机 | 值 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | jindotcom26.github.io |

## 安全须知

- 网站没有后端、数据库或环境变量，纯静态。
- 不要提交客户资料、凭证、内部文件或未脱敏的图片。
- 改 DNS 时**只**动上面这几条 A / CNAME 记录，
  务必保留 Google Workspace 的 MX（`smtp.google.com`）和 SPF TXT 记录，否则公司邮箱会挂。
