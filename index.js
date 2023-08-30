const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  // worked with HTML
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})

    if (req.url === '/') {
      fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf-8', (err, content) => {
        if(err) throw new Error()

        res.end(content)
      })
    } else if (req.url === '/about') {
      fs.readFile(path.join(__dirname, 'templates', 'about.html'), 'utf-8', (err, content) => {
        if(err) throw new Error()

        res.end(content)
      })
    } else if (req.url === '/contact') {
      fs.readFile(path.join(__dirname, 'templates', 'contact.html'), 'utf-8', (err, content) => {
        if(err) throw new Error()

        res.end(content)
      })
    } else if (req.url === '/api/admin') {
      // Add Api
      res.writeHead(200, {'Content-Type': 'text/json'})

      const admin = {name:"Diyorbek", surname:'Juraqulov', job: "FullStack developer"}

      res.end(JSON.stringify(admin))
    }



    // res.writeHead(200, {'Content-Type': 'text/html'})
    // if (req.url === '/') {
    //   fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf-8' , (err, content) => {
    //     if (err) throw new Error()
    //     res.end(content)
    //   })
    // } else if (req.url === '/about') {
    //   fs.readFile(path.join(__dirname, 'templates', 'about.html'), 'utf-8' , (err, content) => {
    //     if (err) throw new Error()
    //     res.end(content)
    //   })
    // } else if (req.url === '/contact') {
    //   fs.readFile(path.join(__dirname, 'templates', 'contact.html'), 'utf-8', (err, content) => {
    //     if (err) throw new Error()
    //     res.end(content)
    //   })
    // }

  } else if (req.method === 'POST') {
    res.writeHead(200, {'Content-Type': 'text/html'})

    const body = []
    req.on('data', data => {
      body.push(Buffer.from(data))

      console.log(body.toString());
    })

    req.on('end', () => {
      const message = body.toString().split('=')[1]

      res.end(`
        <h2>Name added succesfully: ${message}</h2>
        <a href="/">Go to home</a>
      `)
    })





























    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    // const body = []

    // req.on('data', data => {
    //   body.push(Buffer.from(data))
      
    //   console.log(body.toString())
    // })

    // req.on('end', () => {
    //   const message = body.toString().split("=")[1]

    //   res.end(`<h2>Name succesfully added: ${message}</h2>`)
    // })
  }

  console.log(req.method);
})

server.listen(3000, () => {
  console.log("Server is been started on port: 3000");
})