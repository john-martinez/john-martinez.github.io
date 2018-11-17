const mongoose = require('mongoose');
//const dotenv = require('dotenv').config();
mongoose.Promise = Promise;
mongoose.set("debug", true);


// connect to the database  
mongoose.connect(process.env.DB_URI);

module.exports.Trait = require('./traits');
module.exports.Skill = require('./skills');
module.exports.OtherSkill = require('./otherSkills');
module.exports.Testimonial = require('./testimonials');
module.exports.Project = require('./projects');