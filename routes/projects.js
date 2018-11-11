const express = require('express');
const router = express.Router();
const helpers = require('../helpers/projects')

router.route('/')
.get(helpers.showProjects)
.post(helpers.addProject)

router.route('/:id')
.get(helpers.showProject)
.put(helpers.editProject)
.delete(helpers.deleteProject)

module.exports = router;