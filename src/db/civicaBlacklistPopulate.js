import crypto from 'crypto'
import fs from 'fs'
import cliProgress from 'cli-progress'

const numIds = 10000
const txtName = 'test.txt'

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
bar.start(numIds, 0)

for (let i=0; i<numIds; i++) {
    fs.appendFile(txtName, crypto.randomInt(1000000, 9000000).toString()+';', err=> { 
        err ? console.error(error):null
    })
    bar.update(i)
}

bar.stop()
