var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
	rect(l,b,(err, rect) => {
		if(err){
			console.log("Error occeurs:: " + err.message);
		}else{
			console.log("The area of the rectangle is " + rect.area());
			console.log("The perimeter of the rectangle is " + rect.perimeter());
		}
	})
}

solveRect(2,4);
