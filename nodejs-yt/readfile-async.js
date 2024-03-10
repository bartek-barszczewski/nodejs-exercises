const fs = require("fs"); // file system API
const util = require("util"); // promises - avoid callback hell
const PATH = "./files";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function asyncWriteFile(content) {
    const result = await writeFile(PATH + "/message.txt", content + "\n\n");
}

async function asyncReadFile(today) {
    const weather = await readFile(PATH + "/info.txt", "utf-8");
    const message = await readFile(PATH + "/message.txt", "utf-8");

    console.log("\n\n");
    console.log(today);
    console.log(message);
    console.log(weather);
    asyncWriteFile("It will be warm tomorrow, You can wear shorts the next day");
}

asyncReadFile(`Today is ${new Date()}`);
