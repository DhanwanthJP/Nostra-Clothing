const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const error = document.getElementById("formError");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", function(event){

    event.preventDefault();

    error.textContent = "";
    success.textContent = "";

    let messages = [];

    // Name validation
    if(nameInput.value.trim() === ""){
        messages.push("Name is required");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.value.trim() === ""){
        messages.push("Email is required");
    }
    else if(!emailPattern.test(emailInput.value)){
        messages.push("Enter a valid email address");
    }

    // Subject validation
    if(subjectInput.value.trim() === ""){
        messages.push("Subject is required");
    }

    // Message validation
    if(messageInput.value.trim() === ""){
        messages.push("Message cannot be empty");
    }

    // Show errors
    if(messages.length > 0){
        error.textContent = messages.join(" | ");
        return;
    }

    // Dummy submission
    success.textContent = "Message sent successfully!";

    // Reset form
    form.reset();
});