const mongoose = require('mongoose');

// create skill Schema
const testimonialSchema = new mongoose.Schema({
	author: {
		type: String,
		required: true
	}, 
	position: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
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
	}
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;