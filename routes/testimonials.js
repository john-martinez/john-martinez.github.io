const express = require('express'); 
const router = express.Router();
const helpers = require('../helpers/testimonials');

// show all skills
router.route('/')
.get(helpers.showTestimonials)
.post(helpers.addTestimonial)

router.route('/:id')
.get(helpers.showTestimonial)
.put(helpers.editTestimonial)
.delete(helpers.deleteTestimonial)

module.exports = router;