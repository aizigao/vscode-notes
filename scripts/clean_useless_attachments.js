const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const rmoveFile = promisify(fs.unlink);
/// ---
const rootDir = path.resolve(__dirname, "../");
const attachmentsDir = path.resolve(rootDir, "attachments");
const notesDir = path.resolve(rootDir, "notes");

///-------------

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function main() {
  const attachmentMap = {};
  for await (const fn of walk(attachmentsDir)) {
    const key = fn.replace(/.*(\/attachments\/.*)$/, "$1");
    attachmentMap[key] = fn;
  }

  const checkFileExit = async (path) => {
    const content = await readFile(path, "utf-8");
    Object.entries(attachmentMap).forEach(([key]) => {
      if (new RegExp(key).test(content)) {
        delete attachmentMap[key];
      }
    });
  };

  for await (const p of walk(notesDir)) {
    await checkFileExit(p);
  }

  console.log("失效的图片:\n", Object.values(attachmentMap).join("\n"));

  for await (const needRemoveFil of Object.values(attachmentMap)) {
    await rmoveFile(needRemoveFil);
  }
  console.log("---------------------------------------");
  console.log("已清理完成");
}

main();
