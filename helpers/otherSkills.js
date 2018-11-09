const db = require('../models');

exports.showOtherSkills = (req,res)=>{
	db.OtherSkill.find()
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.addOtherSkill = (req,res)=>{
	db.OtherSkill.create(req.body)
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.showOtherSkill = (req,res)=>{
	db.OtherSkill.find({_id: req.params.id})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.editOtherSkill = (req,res)=>{
	db.OtherSkill.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.deleteOtherSkill = (req,res)=>{
	db.OtherSkill.findOneAndDelete({_id: req.params.id})
	.then(data=>res.json({message: "Deleted Other skill!"}))
	.catch(err=>res.send(err))
}

module.exports = exports;