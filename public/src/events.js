/* global variables*/
const blanket = document.querySelector('.blanket');
const testiForm = document.querySelector('.test-form-wrapper');
const formInputs = [author,position,company,img,headline,message];
let timeoutId;


// functions
// create alert
export const alertMessage = (success, msg) => {
	const alertMsg = document.querySelector('.alert p');
		  success ? alertMsg.style.backgroundColor = "rgba(50,250,77,.5)" : alertMsg.style.backgroundColor = "rgba(250,20,40,.7)";
		  alertMsg.textContent = msg;
		  showAlert();
		  clearTimeout(timeoutId);
		  timeoutId = setTimeout(hideAlert,3000);
}

// send testimonials for review
export const submitForm = (e)=>{
	e.preventDefault();
	if (author.value && headline.value && message.value){
		fetch('/api/testimonials', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				author: author.value,
				company: company.value,
				position: position.value,
				img: img.value,
				headline: headline.value,
				message: message.value
			})
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			formInputs.forEach(input=>input.readOnly = "true");
			alertMessage(true, "Thank you! Your testimonial have been submitted for review!");
			document.querySelector('.to-submit button').disabled = true;
		}).catch(err=>console.log(err));
	} else {
		alertMessage(false, "Please make sure that fields with * have values.");
	}
}

// Open Mail Client
export const sendEmail = ()=>{
	window.location.href = 'mailto:jrvmartinz@gmail.com;jrmartinez2@myseneca.ca;jrvmartinez@icloud.com';
}

// show sections with animations
export const removeOffset = function() {
  let y = window.scrollY;	
  let a=200,
  	  b=500,
  	  c=1300,
      d=1600;

  if (window.innerWidth < 675){
  	a = 300;
  	b = 600;
  	c = 2000;
  	d = 2500;
  }
  switch (true){
  	case y > d: resetPosition(document.querySelector('.other-skills'));
  				break;

    case y > c: resetPosition(document.querySelector('.my-skills-wrapper'));
  				break;

    case y > b: resetPosition(document.querySelector('.my-traits'));
    			break;

    case y > a: resetPosition(document.querySelector('.me'));
    			break;
  } 
}

// resets position to origin
export const resetPosition = (elem)=>{
	elem.style.transform = "translateX(0px)";
	elem.style.opacity ="1";
}

export const showAlert = ()=>{
	document.querySelector('.alert').style.opacity = "1";
	document.querySelector('.alert').style.zIndex = "199";
}

export const hideAlert = ()=>{
	document.querySelector('.alert').style.opacity = "0";
	document.querySelector('.alert').style.zIndex = "-199";
}

export const showForm = ()=>{
	blanket.style.opacity = 1;
	blanket.style.zIndex = 198;
	document.querySelector('.to-submit button').disabled = false;
}

export const hideForm = ()=>{
	const blanket = document.querySelector('.blanket');
	blanket.style.opacity = 0;
	blanket.style.zIndex = -99;
	// clear form
	formInputs.forEach(item=>{
		item.value = "";
		item.readOnly = false;
	})
	hideAlert();
}

export const heroShow = (e)=>{
	const jumbo = document.querySelector('.jumbotron-header');
	const jumbo2 = document.querySelector('.jumbotron-overlay2');
	const first = document.querySelector('.first');
	const second = document.querySelector('.second');
	const third = document.querySelector('.third');
    const finish = document.querySelector('.jumbotron-header h2');
	setTimeout(()=>{
		window.scrollTo(0,0); //force scroll to top when page loads
		document.querySelector('.jumbotron-overlay').style.filter = "blur(15px)";
		first.style.opacity = "1";
		first.style.transform = "scale(1.2)"
			setTimeout(()=>{
			first.style.opacity="0";
			setTimeout(()=>{
				second.style.opacity = "1";
				second.style.transform = "scale(1.2)"
				setTimeout(()=>{
					second.style.opacity ="0";
					setTimeout(()=>{
						third.style.opacity ="1";
						third.style.transform = "scale(1.2)"
						setTimeout(()=>{
							third.style.opacity ="0";
							setTimeout(()=>{
								jumbo2.style.opacity = "0";
								jumbo2.style.zIndex = "-99";
								jumbo.style.opacity = "1";
								setTimeout(()=>{
									finish.style.opacity = "1";
								},1000)
							},1000)		
						},3000)
					},1000)
				},3000)
			}, 1000)
		}, 3000);
	}, 2000)
}