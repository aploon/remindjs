import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs'

try {
    const files = await readdir('./');
    for (const file of files) {
        stat(file, (e, s) => {
            if (s.isFile()){
                let size = (s.size / 100) + 'ko'
                console.log(`F - ${file} - ${size}`)
            }else{
                let size = (s.size / 100) + 'ko'
                console.log(`D - ${file} - ${size}`)
            }
        })
    }
} catch (err) {
    console.error(err);
}