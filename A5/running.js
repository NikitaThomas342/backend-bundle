const { fstat } = require('fs');
var http = require('http');
var url = require('url');

const {loadStock, saveStock, fill, sell, check, clear, remove,search} = require('./inventory');

loadStock();

http.createServer(function (req, res) {
    
    var request_path = url.parse(req.url, true);
    var data = '';
    var message = ''
    var status = 200

    switch(request_path.pathname) {
        case '/fill': 
            try{
                data += fill(request_path.query.item,request_path.query.quantity)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/sell': 
            try{
                data += sell(request_path.query.item,request_path.query.quantity)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/check':
            try{
                data += check(request_path.query.item)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/clear': 
            try{
                data += clear(request_path.query.item)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/remove': 
            try{
                data += remove(request_path.query.item)
            }catch(err){
                if(err) throw err
            }
            break;
        case '/search':
            try{
                data += search(request_path.query.name)
            }catch(err){
                if(err) throw err
            }
        default:
            status = 404
            message = 'path not found'
            break
    }

    let access_log = (new Date()).toISOString() + `${request.path.path}\n`

    fs.appendFile('access.log',access_log,(err)=>{
        if(err) throw err
        console.log(err)
    })

    let response_object = {
        status: status,
        message: message,
        data: data
    }

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(JSON.stringify(response_object));
    
}).listen(8080);
console.log('Inventory system is running on port 8080.');