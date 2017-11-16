const Hapi = require('hapi')
const fs = require('fs')
const readLine = require('readline')

const server = new Hapi.Server()
const PORT = '8000'


server.connection({port:PORT, host:'localhost'})
server.route([{
    method: 'GET',
    path: '/test',
    handler: function(request, reply){
      
        let lineReader = readLine.createInterface({
          input: fs.createReadStream('./newFile1.txt')
        })

        lineReader.on('line',(line)=>{
            console.log('reading form file...')
            reply(`<h1>the value from file is: ${JSON.stringify({value:line})}</h1>`)
        })

    }
    },   

    { method: 'POST',
    path: '/test',
    handler: function(request, reply){
        reply(200)
        fs.writeFile('./newFile1.txt',
            request.payload,
            ()=>{console.log('writing some crap to file')})

    }}
])

server.start((err)=>{
    if (err) {
        throw err
    }
    console.log(`running server on port:${PORT}`)
})