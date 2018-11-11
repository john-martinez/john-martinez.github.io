const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	technology: {
		type: Array,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	img: {
		type: String,
		default: ""
	},
	github: {
		type: String,
		default: ""
	}
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;