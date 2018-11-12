
const express = require('express');
const app = express();
const Traits = require('./routes/traits');
const Skills = require('./routes/skills');
const OtherSkills = require('./routes/otherSkills');
const Projects = require('./routes/projects');
const Testimonials = require('./routes/testimonials');
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/media'));


app.get('/', (req,res)=>{
	res.render('index.html');
});

app.use("/api/traits", Traits);
app.use("/api/skills", Skills);
app.use("/api/other-skills", OtherSkills);
app.use("/api/projects", Projects);
app.use("/api/testimonials", Testimonials);


app.listen(PORT, ()=> `listening to port ${PORT}`);