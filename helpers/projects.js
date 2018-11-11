const db = require('../models');

exports.showProjects = (req,res)=>{
	db.Project.find()
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.addProject = (req,res)=>{
	db.Project.create(req.body)
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.showProject = (req,res)=>{
	db.Project.find({_id: req.params.id})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.editProject = (req,res)=>{
	db.Project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}
exports.deleteProject = (req,res)=>{
	db.Project.findOneAndDelete({_id: req.params.id})
	.then(data=>res.json({message: "Project deleted!"}))
	.catch(err=>res.send(err))
}

module.exports = exports;