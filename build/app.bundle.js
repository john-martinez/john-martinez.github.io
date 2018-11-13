/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/app.js":
/*!***********************!*\
  !*** ./public/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* GLOBAL VARIABLES */\nvar author = document.getElementById('author');\nvar position = document.getElementById('position');\nvar company = document.getElementById('company');\nvar img = document.getElementById('img');\nvar headline = document.getElementById('headline');\nvar message = document.getElementById('message');\nvar formInputs = [author, position, company, img, headline, message];\nvar close = document.querySelector('.closeForm');\nvar open = document.querySelector('.add-testi');\nvar blanket = document.querySelector('.blanket');\nvar testiForm = document.querySelector('.test-form-wrapper');\nvar timeoutId;\n/* FUNCTIONS */\n// Data for traits\n\nvar populateTraits = function populateTraits() {\n  fetch('/api/traits').then(function (res) {\n    return res.json();\n  }).then(function (traits) {\n    var traitsParent = document.querySelector('.my-traits'); //loop starts here for traits\n\n    traits.forEach(function (item) {\n      // create div element with class trait-wrapper\n      var traitWrapper = document.createElement('div');\n      traitWrapper.classList.add('trait-wrapper'); // create an i element with class fas fa-search\n\n      var i = document.createElement('i');\n      i.className += item.traitIcon; // create an h1 element that contains a span with class green that includes a text node of trait\n\n      var h1 = document.createElement('h1');\n      var span = document.createElement('span');\n      span.classList.add('green');\n      span.appendChild(document.createTextNode(item.traitName));\n      h1.appendChild(span); // create a p element that contains description\n\n      var p = document.createElement('p');\n      p.appendChild(document.createTextNode(item.traitDesc)); // append i, h1 and p into traitWrapper\n\n      traitWrapper.appendChild(i);\n      traitWrapper.appendChild(h1);\n      traitWrapper.appendChild(p); // append traitWrapper to traitsParent\n\n      traitsParent.appendChild(traitWrapper);\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}; // Data for skills\n\n\nvar populateSkills = function populateSkills() {\n  fetch('/api/skills').then(function (res) {\n    return res.json();\n  }).then(function (skills) {\n    var skillsParent = document.querySelector('.my-skills-wrapper'); //loop starts here\n\n    skills.forEach(function (skill) {\n      // create a div element with class bar-wrapper\n      var barWrapper = document.createElement('div');\n      barWrapper.classList.add('bar-wrapper'); // create a div element with class bar-header with a textnode that contains myskill.skill\n\n      var barHeader = document.createElement('div');\n      barHeader.classList.add('bar-header');\n      barHeader.appendChild(document.createTextNode(skill.skillName)); // create a div element with class bar\n\n      var bar = document.createElement('div');\n      bar.classList.add('bar'); // create a div element with class text-node which contains skill percentage\n\n      var textNode = document.createElement('div');\n      textNode.classList.add('text-node');\n      textNode.appendChild(document.createTextNode(skill.skillLevel));\n      bar.appendChild(textNode); // create a div element with class meter\n\n      var meter = document.createElement('div');\n      meter.classList.add('meter'); // set meter's width to myskill.level\n\n      meter.style.width = skill.skillLevel;\n      bar.appendChild(meter); // append barHeader to barWrapper\n\n      barWrapper.appendChild(barHeader); // append bar to barWrapper\n\n      barWrapper.appendChild(bar); // append barWrapper to skillsParent\n\n      skillsParent.appendChild(barWrapper);\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  }); // other skills\n\n  fetch('/api/other-skills').then(function (res) {\n    return res.json();\n  }).then(function (skills) {\n    // retrieve parent ul element\n    var otherSkillsParent = document.querySelector('.other-skills ul'); // create an array that contains other skills list\n    // loop starts here\n\n    skills.forEach(function (skill) {\n      // create an li element\n      var li = document.createElement('li'); // create a text node which contains other skill\n\n      li.appendChild(document.createTextNode(skill.skillName)); // append li to parent ul\n\n      otherSkillsParent.appendChild(li);\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}; // PROJECTS to be done\n\n\nvar populateProjects = function populateProjects() {\n  fetch('/api/projects').then(function (res) {\n    return res.json();\n  }).then(function (projects) {\n    // select parent div .projects-wrapper\n    var parent = document.querySelector('.projects-wrapper'); // loop starts here\n\n    projects.forEach(function (project) {\n      // create a blank div as a wrapper\n      var div = document.createElement('div'); // create a div element with class .project which contains img\n\n      var projectDiv = document.createElement('div');\n      projectDiv.classList.add('project');\n      projectDiv.style.backgroundImage = \"url(\".concat(project.img, \")\"); // create a div element with class .overlay\n\n      var overlay = document.createElement('div');\n      overlay.classList.add('overlay'); // create an h1 tag with a textnode of name\n\n      var h1 = document.createElement('h1');\n      h1.appendChild(document.createTextNode(project.name)); // create an h2 tag with a textnode of technology\n\n      var h2 = document.createElement('h2'); // loop starts here to loop through projects.technology\n      // h2.appendChild(document.createTextNode(project.technology.join().replace(/,/g, ' + ')));\n\n      var icons = project.technology.map(function (tech) {\n        var i = document.createElement('i');\n        i.classList.add(\"devicon-\".concat(tech, \"-plain\"));\n        i.title = tech;\n        return i;\n      });\n      icons.forEach(function (icon) {\n        return h2.appendChild(icon);\n      }); // create a p tag with a textnode of description\n\n      var p = document.createElement('p');\n      p.appendChild(document.createTextNode(project.description)); // append h1,h2 and p to .overlay\n\n      overlay.appendChild(h1);\n      overlay.appendChild(h2);\n      overlay.appendChild(p); // create an a tag with class=\"fab fa-github\" if github is not == \"\"\n\n      if (project.github) {\n        var github = document.createElement('a');\n        github.classList.add('fab');\n        github.classList.add('fa-github');\n        github.href = project.github;\n        overlay.appendChild(github);\n      } // append .project and .overlay to div\n\n\n      div.appendChild(projectDiv);\n      div.appendChild(overlay); // append div to parent\n\n      parent.appendChild(div);\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}; // Data for Testimonials\n\n\nvar populateTestimonials = function populateTestimonials() {\n  fetch('/api/testimonials').then(function (res) {\n    return res.json();\n  }).then(function (testimonials) {\n    // select the div element with class testimonials\n    var parentTestimonials = document.querySelector('.testimonials'); // loop starts here\n\n    testimonials.forEach(function (testimonial) {\n      // create a div element with class testimonials-wrapper\n      var testimonialsWrapper = document.createElement('div');\n      testimonialsWrapper.classList.add('testimonials-wrapper'); // create a div element with class author-info\n\n      var authorInfo = document.createElement('div');\n      authorInfo.classList.add('author-info'); // create an img element with class author-pic which will have a default value of media/Unknown-person.gif\n\n      var img = document.createElement('img');\n      img.classList.add('author-pic');\n      testimonial.img ? img.src = testimonial.img : img.src = 'Unknown-person.gif'; // create a p element which contains the name of the author\n\n      var name = document.createElement('p');\n      name.appendChild(document.createTextNode(testimonial.author)); // create a p element which contains the author's position and the company.\n\n      var position = document.createElement('p');\n      var at = testimonial.position && testimonial.company ? \"at\" : \"\";\n      position.appendChild(document.createTextNode(\"\".concat(testimonial.position, \" \").concat(at, \" \").concat(testimonial.company))); //create a div element with class bubble\n\n      var bubble = document.createElement('div');\n      bubble.classList.add('bubble'); // create a div element with class testimonial-block\n\n      var testimonialBlock = document.createElement('div');\n      testimonialBlock.classList.add('testimonial-block'); // create an h1 element which contains the headline\n\n      var headline = document.createElement('h1');\n      headline.appendChild(document.createTextNode(testimonial.headline)); // create a p element which contains the message\n\n      var body = document.createElement('pre');\n      body.appendChild(document.createTextNode(testimonial.message)); // create a div element with class arrow-head\n\n      var arrowHead = document.createElement('div');\n      arrowHead.classList.add('arrow-head'); // append img, name and position to authorInfo\n\n      authorInfo.appendChild(img);\n      authorInfo.appendChild(name);\n      authorInfo.appendChild(position); // append headline and body to testimonial-block\n\n      testimonialBlock.appendChild(headline);\n      testimonialBlock.appendChild(body); // append testimonialBlock and arrowHead to bubble\n\n      bubble.appendChild(testimonialBlock);\n      bubble.appendChild(arrowHead); // append authorInfo and bubble to testimonialsWrapper\n\n      testimonialsWrapper.appendChild(authorInfo);\n      testimonialsWrapper.appendChild(bubble); // append testimonialsWrapper to parentTestimonials\n\n      parentTestimonials.appendChild(testimonialsWrapper);\n    });\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar alertMessage = function alertMessage(success, msg) {\n  var alertMsg = document.querySelector('.alert p');\n  success ? alertMsg.style.backgroundColor = \"rgba(50,250,77,.5)\" : alertMsg.style.backgroundColor = \"rgba(250,20,40,.7)\";\n  alertMsg.textContent = msg;\n  showAlert();\n  clearTimeout(timeoutId);\n  timeoutId = setTimeout(hideAlert, 3000);\n}; // send testimonials for review\n\n\nvar submitForm = function submitForm(e) {\n  e.preventDefault();\n\n  if (author.value && headline.value && message.value) {\n    fetch('/api/testimonials', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        author: author.value,\n        company: company.value,\n        position: position.value,\n        img: img.value,\n        headline: headline.value,\n        message: message.value\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      console.log(data);\n      formInputs.forEach(function (input) {\n        return input.readOnly = \"true\";\n      });\n      alertMessage(true, \"Thank you! Your testimonial have been submitted for review!\");\n      document.querySelector('.to-submit button').disabled = true;\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  } else {\n    alertMessage(false, \"Please make sure that fields with * have values.\");\n  }\n}; // Copy emails into clipboard\n\n\nvar emailButton = document.querySelector('#emailCopy');\n\nvar sendEmail = function sendEmail() {\n  window.location.href = 'mailto:jrvmartinz@gmail.com;jrmartinez2@myseneca.ca;jrvmartinez@icloud.com';\n}; // show sections with animations\n\n\nvar myScrollFunc = function myScrollFunc() {\n  var y = window.scrollY;\n  var a = 200,\n      b = 500,\n      c = 1300,\n      d = 1600;\n\n  if (window.innerWidth < 675) {\n    a - 300;\n    b = 600;\n    c = 2000;\n    d = 2500;\n  }\n\n  if (y > a) {\n    resetPosition(document.querySelector('.me'));\n  }\n\n  if (y > b) {\n    resetPosition(document.querySelector('.my-traits'));\n  }\n\n  if (y > c) {\n    resetPosition(document.querySelector('.my-skills-wrapper'));\n  }\n\n  if (y > d) {\n    resetPosition(document.querySelector('.other-skills'));\n  }\n}; // resets position to origin\n\n\nvar resetPosition = function resetPosition(elem) {\n  elem.style.transform = \"translateX(0px)\";\n  elem.style.opacity = \"1\";\n};\n\nvar showAlert = function showAlert() {\n  document.querySelector('.alert').style.opacity = \"1\";\n  document.querySelector('.alert').style.zIndex = \"199\";\n};\n\nvar hideAlert = function hideAlert() {\n  document.querySelector('.alert').style.opacity = \"0\";\n  document.querySelector('.alert').style.zIndex = \"-199\";\n};\n\nvar showForm = function showForm() {\n  blanket.style.opacity = 1;\n  blanket.style.zIndex = 198;\n  document.querySelector('.to-submit button').disabled = false;\n};\n\nvar hideForm = function hideForm() {\n  blanket.style.opacity = 0;\n  blanket.style.zIndex = -99; // clear form\n\n  formInputs.forEach(function (item) {\n    item.value = \"\";\n    item.readOnly = false;\n  });\n  hideAlert();\n};\n\nvar slideShow = function slideShow(e) {\n  var jumbo = document.querySelector('.jumbotron-header');\n  var jumbo2 = document.querySelector('.jumbotron-overlay2');\n  var first = document.querySelector('.first');\n  var second = document.querySelector('.second');\n  var third = document.querySelector('.third');\n  var finish = document.querySelector('.jumbotron-header h2');\n  setTimeout(function () {\n    window.scrollTo(0, 0); //force scroll to top when page loads\n\n    document.querySelector('.jumbotron-overlay').style.filter = \"blur(15px)\";\n    first.style.opacity = \"1\";\n    first.style.transform = \"scale(1.2)\";\n    setTimeout(function () {\n      first.style.opacity = \"0\";\n      setTimeout(function () {\n        second.style.opacity = \"1\";\n        second.style.transform = \"scale(1.2)\";\n        setTimeout(function () {\n          second.style.opacity = \"0\";\n          setTimeout(function () {\n            third.style.opacity = \"1\";\n            third.style.transform = \"scale(1.2)\";\n            setTimeout(function () {\n              third.style.opacity = \"0\";\n              setTimeout(function () {\n                jumbo2.style.opacity = \"0\";\n                jumbo2.style.zIndex = \"-99\";\n                jumbo.style.opacity = \"1\";\n                setTimeout(function () {\n                  finish.style.opacity = \"1\";\n                }, 1000);\n              }, 1000);\n            }, 3000);\n          }, 1000);\n        }, 3000);\n      }, 1000);\n    }, 3000);\n  }, 2000);\n}; // main data population\n\n\npopulateTraits();\npopulateSkills();\npopulateTestimonials();\npopulateProjects(); // events\n\nopen.addEventListener(\"click\", showForm);\nclose.addEventListener(\"click\", hideForm);\nemailButton.addEventListener('click', sendEmail);\ndocument.addEventListener(\"scroll\", myScrollFunc);\ndocument.addEventListener(\"DOMContentLoaded\", slideShow);\ndocument.querySelector('.to-submit').addEventListener('submit', submitForm);\n\n//# sourceURL=webpack:///./public/app.js?");

/***/ })

/******/ });