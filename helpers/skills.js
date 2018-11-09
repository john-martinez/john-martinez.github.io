const db = require('../models');

exports.showSkills = (req,res)=>{
	db.Skill.find()
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.addSkill = (req,res)=>{
	db.Skill.create(req.body)
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.showSkill = (req,res)=>{
	db.Skill.find({_id: req.params.id})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.editSkill = (req,res)=>{
	db.Skill.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}
exports.deleteSkill = (req,res)=>{
	db.Skill.findOneAndDelete({_id: req.params.id})
	.then(data=>res.json({message: "Skill deleted!"}))
	.catch(err=>res.send(err))
}

module.exports = exports;