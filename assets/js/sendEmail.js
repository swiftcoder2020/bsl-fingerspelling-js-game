function sendMail(contactForm) {
    emailjs.send("Gmail_JS", "JS_EmailJS", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            // submit modal extracted & improvised from https://codepen.io/dasan/pen/vqaLPe
            $('#bslContactForm').on('submit', function(e){
                $('#submitSuccessModal').modal('show');
                e.preventDefault();
            });
			contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
            // submit modal extracted & improvised from https://codepen.io/dasan/pen/vqaLPe
            $('#bslContactForm').on('submit', function(e){
                $('#submitFailureModal').modal('show');
                e.preventDefault();
            });
        }
    );
    return false; // To block from loading a new page
}