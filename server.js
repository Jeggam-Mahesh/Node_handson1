const { write } = require('fs');
const http = require('http');
const data = require('./jsondata')
let port = 4000;
const app = http.createServer((req, res) => {

    res.write("<html>")
    res.write("<body>")
    if (req.url === '/') {
        res.write("<h1>What is Node JS ?</h1>")
        res.write("<p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser</p>")
    res.write("<h2>write '/fetchJson' in url to see JSON DATA </h2>")
    }
    else if (req.url === '/About') {
        res.write("<h1> This is About Page</h1>")
    }
    else if (req.url === '/fetchJson') {
        const json_data = JSON.stringify(data)
        res.write(json_data)
        console.log(json_data)
    }
    else {
        res.write("<h1>Page not found</h2>")
    }
    res.write("</body>")
    res.write("</html>")
    res.end()
})




app.listen(port, () => {
    console.log(`server is running on port no:${port} `)
})