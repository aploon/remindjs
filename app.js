import fs from 'node:fs'

const content = fs.readFile('demo.txt', {encoding: 'utf8'}, (e, data) => {
    console.log(data)
})