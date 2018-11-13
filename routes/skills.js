const express = require('express'); 
const router = express.Router();
const helpers = require('../helpers/skills');

// show all skills
router.route('/')
	.get(helpers.showSkills)
	.post(helpers.addSkill)

router.route('/:id')
	.get(helpers.showSkill)
	.put(helpers.editSkill)
	.delete(helpers.deleteSkill)

module.exports = router;