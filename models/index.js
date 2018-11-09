let mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set("debug", true);

// connect to the database
mongoose.connect("mongodb://localhost/portfolio");

module.exports.Trait = require('./traits');
module.exports.Skill = require('./skills');
module.exports.OtherSkill = require('./otherSkills');
module.exports.Testimonial = require('./testimonials');