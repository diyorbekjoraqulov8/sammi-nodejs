const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
      <h2>Send name</h2>
      <form method="post" action="/">
        <input name="name" placeholder="Enter your name">
        <button type="submit">Send name</button>
      </form>
    `)
  } else if (req.method === 'POST') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    const body = []

    req.on('data', data => {
      body.push(Buffer.from(data))
      
      console.log(body.toString())
    })

    req.on('end', () => {
      const message = body.toString().split("=")[1]

      res.end(`<h2>Name succesfully added: ${message}</h2>`)
    })
  }


  console.log(req.method);

  
})

server.listen(3000, () => {
  console.log("Server is been started on port: 3000");
})