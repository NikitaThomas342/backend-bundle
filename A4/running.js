var http = require('http');
var url = require('url');

const {loadStock, saveStock, fill, sell, check, clear, remove} = require('./inventory');

loadStock();

http.createServer(function (req, res) {
    
    var request_path = url.parse(req.url, true);
    var body = '';

    switch(request_path.pathname) {
        case '/fill': 
            try{
                body += fill(request_path.query.item,request_path.query.quantity)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/sell': 
            try{
                body += sell(request_path.query.item,request_path.query.quantity)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/check':
            try{
                body += check(request_path.query.item)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/clear': 
            try{
                body += clear(request_path.query.item)
            }catch(err){
                if(err) throw err
            }
            break;

        case '/remove': 
            try{
                body += remove(request_path.query.item)
            }catch(err){
                if(err) throw err
            }
            break;
    }

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(body);
    
}).listen(8080);
console.log('Inventory system is running on port 8080.');