const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
	res.end('Will send details of the dish: '+req.params.dishId+"  to you");
})

.post( (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
})

.put( (req, res, next) => {
	res.write('Updating dish: '+req.params.dishId+'\n');
	res.end('Will the dish '+req.body.description);
})

.delete( (req, res, next) => {
	res.end('Deleting dish '+req.params.dishId);
});



module.exports = dishRouter;