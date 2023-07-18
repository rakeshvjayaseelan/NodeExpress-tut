const http = require('http')
const { version } = require('os')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('This is our history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back home</a>
    `)
    // res.write('Welcome to our home page')
    // res.end()
})

server.listen(5000)