let express = require("express");

let router = express.Router();

//DATABASE

let shoppingList = [];
let id = 100;

router.get("/shoppinglist", function(req,res) {
	res.status(200).json(shoppingList);
});

router.post("/shoppinglist", function(req,res) {
	let shoppingItem = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"id":id		
	}
	id++;
	shoppingList.push(shoppingItem);
	console.log(shoppingList);
	res.status(200).json({"message":"success"});
});

router.delete("/shoppinglist/:id", function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i = 0;i<shoppingList.length;i++) {
		if(tempId === shoppingList[i].id) {
			shoppingList.splice(i,1);
			return res.status(200).json({"message":"success"});
		}
	}
	res.status(404).json({"message":"not found"});
});

module.exports = router;
