import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import { appendFile } from 'node:fs';

export const logging = () => {

    try {
        if (existsSync("logs")) {
            console.log("folder exists")
        } else {
            mkdir("logs")
            writeFile("logs/log.txt", "hello")
            console.log("folder created")
        }
    } catch (error) {
        console.log(error)
    }

    let mytext = "hallo Laura"
    appendFile("logs/log.txt", + "\n" + mytext, function (err) {
        if (err) throw (err);
        console.log('saved')
    })
}
