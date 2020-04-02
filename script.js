function contactForm(){
	var validationServer01= document.getElementById("validationServer01").value;
	var validationServer02= document.getElementById("validationServer02").value;
	var validationServer03= document.getElementById("validationServer03").value;
	//var validationServer04= document.getElementById("validationServer04").value;
	var message= document.getElementById("message").value;
	var error_message= document.getElementById("error-message");
	var text;

	error_message.style.padding="10px";

	if (validationServer01.length<5) {
		text="name too short,please enter again";
		error_message.innerHTML=text;
		return false;
	}

	if (validationServer02.length<10) {
		text="kindely enter a corresponding subeject";
		error_message.innerHTML=text;
		return false;
	}
	if (isNaN(validationServer03) || validationServer03.length !== 10){
		text="please enter a valid phone number";
		error_message.innerHTML=text;
		return false;
	}
	if (message.length>150) {
		text= "your message is too long to fit in, please try and summarize your queery";
		error_message.innerHTML= text;
		return false;
	}
	if (message =="") {
		text= "your message cant be empty";
		error_message.innerHTML= text;
		return false;
	}
	//alert("form submited successfully!")
	return true;

}