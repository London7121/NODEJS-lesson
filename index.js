const http = require('http');
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, "Successfully", { 'content-type': 'text/html' })
        if (req.url === "/") {
            fs.readFile(path.join(__dirname, "templates", "index.html"), 'utf-8', (err, content) => {
                if (err) throw err
                res.end(content)
            })
        } else if (req.url === "/about") {
            fs.readFile(path.join(__dirname, "templates", "about.html"), 'utf-8', (err, content) => {
                if (err) throw err
                res.end(content)
            })
        } else if (req.url === "/contact") {
            fs.readFile(path.join(__dirname, "templates", "contact.html"), 'utf-8', (err, content) => {
                if (err) throw err
                res.end(content)
            })
        }
    } else if (req.method === "POST") {
        const body = []
        res.writeHead(200, "Successfully",
            {
                'content-type': 'text/html; charset=uts-8'
            }
        )
        req.on("data", data => body.push(Buffer.from(data).toString()))
        req.on("end", () => {
            const message = body.toString().split('=')[1]
            res.end(`Email succssfully ${message}`)
        })
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});