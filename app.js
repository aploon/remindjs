import fs from 'node:fs'

const content = fs.readFile('log.txt', {encoding: 'utf8'}, (e, data) => {
    console.log(data)
})