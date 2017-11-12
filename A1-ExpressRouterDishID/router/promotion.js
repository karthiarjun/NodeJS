const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

//Promotion
promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
	res.end('call get Promotion: ');
})

.post( (req, res, next) => {
		res.end('Promotion name: '+ req.body.promoName + ' Promo description: ' + req.body.promoDesc);

})

.put( (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
})

.delete( (req, res, next) => {
	res.end('Deleting promotion '+req.body.promoName);
});

//PromotionID

promotionRouter.route('/:promoid')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req, res, next) => {
	res.end('Promo ID: '+req.params.promoid+"  to you");
})

.post( (req, res, next) => {
	res.status = 403;
	res.end('403 no supported for dishes');
})

.put( (req, res, next) => {
	res.write('PromoID: '+req.params.promoid+'\n');
	res.end('Promo desc '+req.body.promoDesc);
})

.delete( (req, res, next) => {
	res.end('Deleting dish '+req.params.promoid);
});



module.exports = promotionRouter;