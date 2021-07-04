function sendMail(contactForm) {
    emailjs.send("Gmail_JS", "JS_EmailJS", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            // alert("Thanks for submitting your response! I will be in touch with you soon!");
			// contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
            // alert("Sorry, you were unsuccessful in sending an email, please try again later.");
        }
    );
    return false; // To block from loading a new page
}