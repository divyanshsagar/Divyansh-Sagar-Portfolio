const soundCloud = document.querySelector(".sound-cloud");
const off = document.querySelector("#off");
const on = document.querySelector("#on");
const myAudio = document.querySelector("#myAudio");
off.addEventListener("click", () => soundTrack("off"));
on.addEventListener("click", () => soundTrack("on"));
const soundTrack = (soundState) => {
  if (soundState === "off") {
    on.style.display = "block";
    off.style.display = "none";
    soundCloud.style.color = "#EE1D52";
    myAudio.play();
  } else if (soundState === "on") {
    on.style.display = "none";
    off.style.display = "block";
    soundCloud.style.color = "#69C9D0";
    myAudio.pause();
  }
};
//play music functionality
const btnBars = document.querySelector(".bars");
const btnTimes = document.querySelector(".times");
const SideNav = document.querySelector(".aside");
btnBars.addEventListener("click", () => myFunc("open"));
btnTimes.addEventListener("click", () => myFunc("close"));
const myFunc = (navCondition) => {
  if (navCondition === "open") {
    SideNav.classList.add("show-nav");
    btnTimes.style.display = "block";
    btnBars.style.display = "none";
  } else if (navCondition === "close") {
    SideNav.classList.remove("show-nav");
    btnTimes.style.display = "none";
    btnBars.style.display = "block";
  }
};
//part 1 ends here
$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#69C9D0",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      },
      "tags"
    )
  ) {
    //something went wrong hiding the canvas container
    $("#myCanvasContainer");
  }
});
//contact section functionality starts here
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const subjectInput = document.querySelector(".subject");
const textareaInput = document.querySelector(".textarea");
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  validateInput();
});
const validateInput = () => {
  let email = emailInput.value;
  let textarea = textareaInput.value;
  if (!email && !textarea) {
    setError(emailInput.parentElement);
    setError(textareaInput.parentElement);
    showMessage("Please fill in all required fields.");
  } else if (!email && textarea) {
    setError(emailInput.parentElement);
    showMessage("Please fill in Email field.");
  } else if (!textarea && email) {
    setError(textareaInput.parentElement);
    showMessage("Please fill in compose email field.");
  } else if (email && textarea) {
    emailjs.sendForm(
      "service_s2nzxze",
      "template_4oxmdd9",
      contactForm,
      "xdEEs2Bbv3h10EVz9"
    );
    setSuccess(emailInput.parentElement);
    setSuccess(textareaInput.parentElement);
    showMessage("Sent", "#69C9D0");
    textareaInput.value = "";
    emailInput.value = "";
    nameInput.value = "";
    subjectInput.value = "";
  }
};
const setError = (input) => {
  if (input.classList.contains("success")) {
    input.classList.remove("success");
  } else {
    input.classList.add("error");
  }
};
const setSuccess = (input) => {
  if (input.classList.contains("error")) {
    input.classList.remove("error");
  } else {
    input.classList.add("success");
  }
};
const messageDiv = document.querySelector(".message");
const showMessage = (message, updateColor) => {
  const divContent = document.createElement("div");
  divContent.textContent = message;
  divContent.classList.add("message-content");
  divContent.style.backgroundColor = updateColor;
  messageDiv.prepend(divContent);
  messageDiv.style.transform = `translate(${(0, 0)}%)`;
  setTimeout(() => {
    divContent.classList.add("hide");
    divContent.addEventListener("transitionend", () => {
      divContent.remove();
    });
  }, 5000);
};
//contact section functionality ends here
