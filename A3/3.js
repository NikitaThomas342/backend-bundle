var stock = new Map()
stock.set('milk',10)
stock.set('orange_juice',10)
stock.set('egg',20)
stock.set('salad',10)

var fs = require('fs')
fs.readFile('./a3.dat', function(err,filedata){
    if(err) throw err
    var data_txt = filedata.toString()
    data_line = data_txt.split('\n')
    data_line.forEach(function(line){
        let dat = line.split(' ')
        stock.set(dat[0],parseInt(dat[1]))
    })
    stock.forEach((value,key) => {
        console.log('We have ' + value + ' ' + key + '(s).')
    })
})

var http = require('http')
http.createServer(function (req,res){
    var request_path = url.parse(req.url, true)
    var body = ''
    switch(request_path.pathname){
        case '/fill':
            fill(request_path.query.item, request_path.query.quantity)
            body += 'filled!'
            break
    }
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(body)
}).listen(8080)
console.log('Running on port 8080')

fill = (item,quantity) => {
    if(stock.has(item)){
        stock.set(item,stock.get(item) + quantity)
    }else{
        stock.set(item,quantity)
    }
    saveStock()
    return stock.get(item)
}

saveStock = () => {
    let buffer = ''
    stock.forEach((value,key) => {
        buffer += key + " " + value + '\n'
    })
    fs.writeFile('./a3.dat',buffer, function(err){
        if(err) throw err
    })
}