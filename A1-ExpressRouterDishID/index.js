const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const hostname='localhost';
const port = 3000;

const app = express();
const dishRouter = require('./router/dishRouter');
const promoRouter = require('./router/promotion');
app.use(morgan('dev'));
app.use(bodyParser.json()); //adding bodyparser to make json response
app.use('/dishes',dishRouter); //Mount dishRouter
app.use('/promotion',promoRouter); //Mount dishRouter
app.use(express.static(__dirname+'/public')); //access file from folder


 app.use((req,res,next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-type','text/html');
	res.end('<html> <body> <h1> Express server </h1> </body></html>')
}); 

const server = http.createServer(app);
server.listen(port,hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
})

//by default http://localhost:3000/ it refers to index.html

//http://localhost:3000/abt.html