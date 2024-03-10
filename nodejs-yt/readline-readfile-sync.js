const readline = require("readline");
const fs = require("fs");
const PATH = "./files/";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Please enter file name: ", (name) => {
    try {
        const fileIn = fs.readFileSync(PATH + name, "utf-8");
        console.log(fileIn);
        rl.close();
    } catch (err) {
        console.log(`File in ${PATH}${name} not exist!`);
        rl.close();
    }
});

rl.on("close", (event) => {
    process.exit(0);
});
