const mongoose = require('mongoose');

// create traits schema
const traitSchema = new mongoose.Schema({
	traitName: {
		type: String,
		required: true
	},
	traitDesc:{
		type: String,
		required: true
	},
	traitIcon:{
		type: String,
		required: true
	}
});
//create traits model
const Trait = mongoose.model('Trait', traitSchema);

module.exports = Trait;