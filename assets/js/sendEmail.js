function sendMail(contactForm) {
    emailjs.send("Gmail_JS", "JS_EmailJS", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
			contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}