let mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set("debug", true);

const local =  "mongodb://localhost:3000/portfolio";
const deployed = "mongodb://admin:4r4yk0bH3!@ds121753.mlab.com:21753/portfolio";
// connect to the database
mongoose.connect(deployed);

module.exports.Trait = require('./traits');
module.exports.Skill = require('./skills');
module.exports.OtherSkill = require('./otherSkills');
module.exports.Testimonial = require('./testimonials');
module.exports.Project = require('./projects');