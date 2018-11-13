const express = require('express');
const router = express.Router();
const helpers = require('../helpers/otherSkills');

router.route('/')
	.get(helpers.showOtherSkills)
	.post(helpers.addOtherSkill)

router.route('/:id')
	.get(helpers.showOtherSkill)
	.put(helpers.editOtherSkill)
	.delete(helpers.deleteOtherSkill)

module.exports = router;