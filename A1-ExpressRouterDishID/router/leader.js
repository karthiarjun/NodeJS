const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

//Leader
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
	res.end('call get Leader: ');
})

.post( (req, res, next) => {
		res.end('Leader name: '+ req.body.leaderName + ' Leader description: ' + req.body.leaderDesc);

})

.put( (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
})

.delete( (req, res, next) => {
	res.end('Deleting Leader '+req.body.leaderName);
});

//LeaderID

leaderRouter.route('/:leaderid')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
	res.end('Leader ID: '+req.params.leaderid+"  to you");
})

.post( (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
})

.put( (req, res, next) => {
	res.write('LeaderID: '+req.params.leaderid+'\n');
	res.end('Leader desc '+req.body.leaderDesc);
})

.delete( (req, res, next) => {
	res.end('Deleting dish '+req.params.leaderid);
});



module.exports = leaderRouter;