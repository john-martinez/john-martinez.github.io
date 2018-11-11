const mongoose = require('mongoose');

// create skill Schema
const testimonialSchema = new mongoose.Schema({
	author: {
		type: String,
		required: true
	}, 
	position: {
		type: String
	},
	company: {
		type: String
	},
	img: {
		type: String,
		default: ""
	},
	headline: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	approved:{
		type: Boolean,
		default: false
	}
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;