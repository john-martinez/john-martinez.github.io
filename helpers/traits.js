const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = require('../models');


// return all traits
exports.showTraits = (req,res)=>{
	db.Trait.find()
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

// create new trait
exports.addTrait = (req,res)=>{
	db.Trait.create(req.body)
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
};

// return one trait
exports.showTrait = (req,res)=>{
	db.Trait.find({_id: req.params.id})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
};

// update one trait
exports.editTrait = (req,res)=>{
	db.Trait.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
};


// remove one trait
exports.deleteTrait = (req,res)=>{
	db.Trait.findOneAndDelete({_id: req.params.id})
	.then(()=>res.json({message: 'Trait Deleted!'}))
	.catch(err=>res.send(err))
}


module.exports = exports;


