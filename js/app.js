'use strict';

// Clean prompt function 
function userPrompt(question) {
    return prompt(question).trim();
    // .trim() to remove unnecessary parts
}

// User name function
function getUserName() {
    let name = userPrompt("What is your name?");

    while (name === "") {
        name = userPrompt("Invalid input. Please enter your name:");
    }
    return name;
}

// User gender function 
function getUserGender() {
    let gender = userPrompt("What is your gender? (male or female)");

    while (gender !== "male"  && gender !== "female"
    && gender !== "Male"  && gender !== "Female") {
        gender = userPrompt("Invalid input! What is your gender? (male or female)");
    }
    return gender;
}

// User age function 
function getUserAge() {
    let age = parseInt(userPrompt("How old are you?"));

    while (age <= 0 || isNaN(age)) {
        age = userPrompt("Invalid input! How old are you?")
    }

    return age;
}

// Skip message function
function confirmSkipMessage() {
    let confirmSkip = confirm("Do you want to skip the welcoming message?");

    return confirmSkip;
}

// User's Welcome message function 
function welcomeMessage(name, gender, skipMessage) {
    let title = "";

    if (gender === "male" || gender === "Male") {
        title = "Mr.";
    } else if (gender === "female" || gender === "Female") {
        title = "Ms."
    }

    let message = `Welcome ${skipMessage ? "" : " " + title} ${name}!`;
    // this is an if statement, 
    // if skipMessage is true than do not add title
    // if skipMessage is false than add title 

    alert(message);
}

// Additional questions function 
function additionalQuestions() {
    const questions = [
        "Do you watch movies?",
        "Do you feel good today?",
        "Are you excited about Champions finals?"
    ]

    const answers = []

    for (let i = 0; i < questions.length; i++) {
        let answer = "";
        do {
            answer = userPrompt(questions[i] + " (Please answer with 'yes' or 'no'):");
        } while (answer !== "yes" && answer !== "no");
        // Only "yes" or "no" answers

        answers.push(answer === "yes" ? "Yes" : "No");
    }

    return answers;
}

// Main function to run the application
function runApplication() {
    const name = getUserName();
    const gender = getUserGender();
    const age = getUserAge();
    const skipMessage = confirmSkipMessage();
    welcomeMessage(name, gender, skipMessage);
    const additionalAnswers = additionalQuestions();

    // Console logs
    console.log("User Information:");
    console.log(`Name: ${name}`);
    console.log(`Gender: ${gender}`);
    console.log(`Age: ${age}`);
    console.log(`Skip Message: ${skipMessage}`);
    console.log("Additional Answers:");
    console.log(additionalAnswers);
}

// Run the application
runApplication();