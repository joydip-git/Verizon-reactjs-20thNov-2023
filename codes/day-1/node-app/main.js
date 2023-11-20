const http = require('http')
const fs = require('fs')


const serverapp = http.createServer(
    (req, res) => {
        const data = fs.readFileSync('./data.txt', { encoding: 'utf-8' })
        res.end(data.toString())
    }
)

serverapp.listen(
    4000,
    () => console.log('server is running...')
)