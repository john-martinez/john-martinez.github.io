const mongoose = require('mongoose');

const otherSkillsSchema = new mongoose.Schema({
	skillName: {
		type: String,
		required: true
	}
})

const OtherSkill = mongoose.model("OtherSkill", otherSkillsSchema);

module.exports = OtherSkill;