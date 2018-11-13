const express = require('express');
const router = express.Router();
const helpers = require('../helpers/traits');

router.route('/')
	.get(helpers.showTraits)
	.post(helpers.addTrait)

router.route('/:id')
	.get(helpers.showTrait)
	.put(helpers.editTrait)
	.delete(helpers.deleteTrait)

module.exports = router;