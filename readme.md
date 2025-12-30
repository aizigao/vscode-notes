# Using VSCode for Notes

[中文说明](./readme-zh.md)

VSCode provides an excellent experience for writing Markdown. Combined with `git` for version control, it works great. The only pain point is image uploading. I found the `Paste Image` plugin solves this problem, so I uploaded this repository with my configuration in `.vscode`.

![readme__2021-08-13-15-45-03](/attachments/readme__2021-08-13-15-45-03.png)

## Installation

- Fork this repository first
- Install the [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image) plugin
- Write your notes in the note folder

## Clean Up Unused Images

```shell
node scripts/clean_useless_attachments.js
```

## Notes

- The `.vscode` folder contains the configuration for the `Paste Image` plugin, which you can modify as needed. The default hotkey is `cmd + alt + v` (Windows `ctrl+alt+v`), or you can use `cmd + shift + p` to bring up `paste image`
