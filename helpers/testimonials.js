const db = require('../models');

exports.showTestimonials = (req,res)=>{
	db.Testimonial.find()
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.addTestimonial = (req,res)=>{
	db.Testimonial.create(req.body)
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.showTestimonial = (req,res)=>{
	db.Testimonial.find({_id: req.params.id})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}

exports.editTestimonial = (req,res)=>{
	db.Testimonial.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.then(data=>res.json(data))
	.catch(err=>res.send(err))
}
exports.deleteTestimonial = (req,res)=>{
	db.Testimonial.findOneAndDelete({_id: req.params.id})
	.then(data=>res.json({message: "Testimonial deleted!"}))
	.catch(err=>res.send(err))
}

module.exports = exports;