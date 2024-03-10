const readline = require("readline");
const fs = require("fs");
const PATH = "./files/";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Please enter file name: ", (name) => {
    try {
        const content = `${new Date()} ::Error application 0x123123 running filed`;
        fs.writeFileSync(PATH + name, content);
        rl.close();
    } catch (err) {
        rl.close();
    }
});
