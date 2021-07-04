function sendMail(bslContactForm) {
    emailjs.send("bslgame_js", "bsl_EmailJS", {
        "from_name": bslContactForm.bslfullname.value,
        "from_email": bslContactForm.bslemailaddress.value,
        "message": bslContactForm.bslmessage.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thanks for submitting your response! I will be in touch with you soon!");
			contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Sorry, you were unsuccessful in sending an email, please try again later.");
        }
    );
    return false; // To block from loading a new page
}