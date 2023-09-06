import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs'

try {
    const files = readdir('./');
    files.then((files) => {
        for (const file of files) {
            stat(file, (e, s) => {
                if (s.isFile()){
                    let size = (s.size / 100) + 'ko'
                    console.log(`F - ${file} - ${size}`)
                }else{
                    let size = (s.size / 100) + 'ko'
                    console.log(`D - ${file}`)
                }
            })
        }
    })

} catch (err) {
    console.error(err);
}