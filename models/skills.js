const mongoose = require('mongoose');

// create skill Schema
const skillSchema = new mongoose.Schema({
	skillName:{
		type: String,
		required: true
	},
	skillLevel:{
		type: String,
		required: true
	}
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;