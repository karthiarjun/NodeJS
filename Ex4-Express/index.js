const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const hostname='localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json()); //adding bodyparser to make json response
app.all('/dishes',(req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text/plain');
	next();
}); //Request method

//Dishes
app.get('/dishes', (req, res, next) => {
	res.end('Will send dishes to u soon');
});

app.post('/dishes', (req, res, next) => {
	res.end('Will add the dish: '+ req.body.name + ' with details: ' + req.body.description);//request should contain the name and description string
});

app.put('/dishes', (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
});

app.delete('/dishes', (req, res, next) => {
	res.end('Deleting all disches');
});


//Dishids
app.get('/dishes/:dishId', (req, res, next) => {
	res.end('Will send details of the dish: '+req.params.dishId+"  to you");
});

app.post('/dishes/:dishId', (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
});

app.put('/dishes/:dishId', (req, res, next) => {
	res.write('Updating dish: '+req.params.dishId+'\n');
	res.end('Will the dish '+req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
	res.end('Deleting dish '+req.params.dishId);
});



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