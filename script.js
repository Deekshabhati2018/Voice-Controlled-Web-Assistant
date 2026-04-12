const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";

startBtn.onclick = () => {
    recognition.start();
    output.innerText = "Listening...";
};

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    output.innerText = "You said: " + command;
    handleCommand(command);
};


command = command.replace(".", "").trim();

function handleCommand(command) {
    command = command
    .replace(/[.,!?]/g, "")
    .toLowerCase()
    .trim();


    if (command.includes("hello")) {
        speak("Hello, i am ready to help you!");
    }
    else if (command.includes("change theme")) {
        document.body.classList.toggle("dark");
        speak("Theme changed");
    }
    else if (command.includes("open projects")) {
        speak("Opening projects section");
        alert("Projects opened!");
    }else if (command.includes("scroll down")) {
    window.scrollBy({ top: 400, behavior: "smooth" });
    speak("Scrolling down");
    }
    else if (command.includes("scroll up")) {
    window.scrollBy({ top: -400, behavior: "smooth" });
    speak("Scrolling up");
    }
    else if (command.includes("go to top")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    speak("Going to the top");
    }
    else if (
    command.includes("about") ||
    command.includes("who are you") ||
    command.includes("about you")
) {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    speak("Here is the about section");
}


else if (
    command.includes("project") ||
    command.includes("projects") ||
    command.includes("my projects") ||
    command.includes("show projects")
) {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    speak("Opening projects");
}

else if (
    command.includes("contact") ||
    command.includes("reach you") ||
    command.includes("email")
) {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    speak("Here is the contact section");
}

    else {
        speak("Sorry, I did not understand that");
    }
}

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
