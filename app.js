import {readFile} from 'node:fs/promises'

const content = readFile('demo.txt', {encoding: 'utf8'})
content.then((e) => {
    console.log(e)
    throw new Error('Hello word !')
}).catch((e) => console.log(e))