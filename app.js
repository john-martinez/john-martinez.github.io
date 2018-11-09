const express = require('express');
const app = express();
const Traits = require('./routes/traits.js');
const Skills = require('./routes/skills.js');
const OtherSkills = require('./routes/otherSkills.js');
const Testimonials = require('./routes/testimonials.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/media'));

app.set('view engine', 'html');


app.get('/', (req,res)=>{
	res.render('index.html');
});

app.use("/api/traits", Traits);
app.use("/api/skills", Skills);
app.use("/api/other-skills", OtherSkills);
app.use("/api/testimonials", Testimonials);

app.listen(3000, ()=> "listening to port 3000");