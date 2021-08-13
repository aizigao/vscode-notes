# 用 vscode 写个笔记用

vscode 写markdown 体验非常好了，再用 `git` 做版本控制体验就不错了，只是图片上传有些蛋疼，发现 `Paste Image` 这个插件可以解决我的问题，所以我上传这个仓库，在`.vscode`中写入了我的配置。

![readme__2021-08-13-15-45-03](/attachments/readme__2021-08-13-15-45-03.png)

## 安装

- 先 fork 下来
- 需要安装[Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image) 这个插件
- 在 note 里写笔记

## 清除已失效的图片

```shell
node scripts/clean_useless_attachments.js
```

## 注意点

- `.vscode` 文件夹放了 `Paste Image` 插件的配置, 可以自行修改, 默认热键是 `cmd + alt + v` (window `ctrl+alt+v`), 或者 `cmd + shift + p` 调出 `paste image`
