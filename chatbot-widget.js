// Inject faicon
const faIcon = document.createElement("link");
faIcon.rel = "stylesheet";
faIcon.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
document.head.appendChild(faIcon);

// Inject CSS
const style = document.createElement("style");
style.textContent = `@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

:root {
  --primary-background-color: rgb(23, 147, 163);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  margin-bottom: 8px;
}

.chatbot-container {
  position: fixed;
  bottom: -750px;
  right: 24px;
  border-radius: 10px;
  width: 480px;
  display: none;
  flex-direction: column;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.chatbot-header {
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: var(--primary-background-color);
  padding: 20px;
  border-radius: 10px 10px 0 0;
  color: white;
}

.chatbot-header > div h2 {
  margin-bottom: 10px;
}

.chatbot-header p {
  font-size: 14px;
  color: #f1f1f1;
}

.chatbot-subheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: var(--primary-background-color);
  color: white;
  border-top: 1px solid #ccc;
}

.chatbot-subheader i {
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
}

.chatbot-subheader button {
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

.chatbot-body {
  overflow-y: auto;
  padding: 20px;
  height: 480px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 14px;
  border-radius: 7px;
  max-width: 60%;
  color: white;
}

.user-msg {
  align-self: flex-end;
  position: relative;
  background-color: var(--primary-background-color);
}

.bot-msg {
  align-self: flex-start;
  position: relative;
  color: rgb(9, 90, 100);
  background-color: rgb(226, 255, 255);
}

.message-bot {
  position: relative;
  display: flex;
  align-items: end;
  gap: 10px;
}

.message-bot i {
  font-size: 14px;
  background-color: var(--primary-background-color);
  color: white;
}

input {
  width: 100%;
  padding: 12px;
  border: none;
  font-size: 18px;
}

input:focus {
  outline: none;
}

.chatbot-footer {
  display: flex;
  padding: 12px;
}

.chatbot-footer button {
  width: 48px;
  border: none;
  background-color: white;
}

.toggle-btn {
  cursor: pointer;
  font-size: 28px;
  background-color: var(--primary-background-color);
  padding: 14px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 24px;
  right: 24px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.fa-robot {
  font-size: 28px;
  color: var(--primary-background-color);
  background-color: white;
  padding: 10px 7px;
  border-radius: 50%;
}

.fa-paper-plane {
  color: var(--primary-background-color);
}

.close-mobile-btn {
  display: none;
  font-size: 20px;
  margin-left: auto;
  cursor: pointer;
  border: 1px solid white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  border-radius: 50%;
  width: 16px;
  height: 14px;
}

/* animations */
.slide-top {
  -webkit-animation: slide-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-850px);
    transform: translateY(-850px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-850px);
    transform: translateY(-850px);
  }
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.2s both;
  animation: slide-bottom 0.2s both;
}
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-850px);
    transform: translateY(-850px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-850px);
    transform: translateY(-850px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.rotate-center {
  animation: rotate-center 0.2s ease-in-out both;
}
@keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate-center-reverse {
  animation: rotate-center-reverse 0.2s ease-in-out both;
}
@keyframes rotate-center-reverse {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}

/* media queries */
@media only screen and (max-width: 527px) {
  .chatbot-container {
    right: 0px;
    width: 100%;
    border-radius: 0px;
    height: 100%;
    bottom: -850px;
  }

  .chatbot-header {
    border-radius: 0px;
  }

  .chatbot-body {
    flex: 1;
  }

  .close-mobile-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;
document.head.appendChild(style);

// Inject HTML
const wrapper = document.createElement("div");
wrapper.innerHTML = `<div class="chatbot-container slide-top">
      <!-- chatbot header -->
      <div class="chatbot-header">
        <i class="fa-solid fa-robot"></i>
        <div>
          <h2>My Chatbot</h2>
          <p>Hello! We are here to assist you on anything.</p>
        </div>
        <span class="close-mobile-btn">
          <i class="fa fa-times"></i>
        </span>
      </div>

      <!-- chatbot subheader -->
      <div class="chatbot-subheader">
        <div>
          <i class="fa-brands fa-facebook-messenger"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>

        <button>Reset</button>
      </div>

      <!-- chatbot body -->
      <div class="chatbot-body">
        <div class="message user-msg">
          <p>hi</p>
        </div>
        <div class="message-bot">
          <i class="fa-solid fa-robot"></i>
          <div class="message bot-msg">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="User"
              style="width: 32px; height: 32px"
            />
            <p>Hi! I am AI chat bot,</p>
            <p>How can I help you today?</p>
          </div>
        </div>
        <div class="message user-msg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus dicta est qui perferendis, molestiae delectus maiores
            nobis praesentium autem explicabo!
          </p>
        </div>
      </div>

      <!-- chatbot footer -->
      <div class="chatbot-footer">
        <input type="text" id="chatInput" placeholder="Type your message" />
        <button>
          <i class="fa-solid fa-paper-plane" style="font-size: 20px"></i>
        </button>
      </div>
    </div>

    <!-- chatbot toggle button -->
    <div class="chatbot-toggle">
      <span class="toggle-btn"
        ><i class="fa-solid fa-comment" style="color: white"></i
      ></span>
    </div>

    <!-- chatbot toggle button -->
    <script src="script.js"></script>`;
document.body.appendChild(wrapper);

// Execute JS
const chatbotToggle = document.querySelector(".chatbot-toggle"); // Get the toggle button
const chatbotContainer = document.querySelector(".chatbot-container"); // Get the chatbot container

function isMobile() {
  return window.innerWidth <= 527;
}

chatbotToggle.onclick = function () {
  const isOpen = chatbotContainer.style.display === "flex";
  const icon = chatbotToggle.querySelector("i");

  // rotate the icon
  const rotateClass = isOpen ? "rotate-center-reverse" : "rotate-center";
  icon.classList.add(rotateClass);
  icon.addEventListener("animationend", function handleRotation() {
    icon.classList.remove(rotateClass);
    icon.removeEventListener("animationend", handleRotation);
  });

  if (isOpen) {
    // Switch to comment icon
    icon.classList.remove("fa-times");
    icon.classList.add("fa-comment");

    // Slide down to hide
    chatbotContainer.classList.remove("slide-top");
    chatbotContainer.classList.add("slide-bottom");
    chatbotContainer.addEventListener("animationend", function handleClose() {
      chatbotContainer.style.display = "none";
      chatbotContainer.classList.remove("slide-bottom");
      chatbotContainer.removeEventListener("animationend", handleClose);

      // show toggle button on mobile after closing
      if (isMobile()) {
        chatbotToggle.style.display = "flex";
      }
    });
  } else {
    // Switch to close icon
    icon.classList.remove("fa-comment");
    icon.classList.add("fa-times");

    // hide toggle button on mobile after opening
    if (isMobile()) {
      chatbotToggle.style.display = "none";
    }

    // Slide up to show
    chatbotContainer.style.display = "flex";
    chatbotContainer.classList.remove("slide-bottom");
    chatbotContainer.classList.add("slide-top");
  }
};

const closeMobileBtn = document.querySelector(".close-mobile-btn");
closeMobileBtn.onclick = function () {
  chatbotContainer.classList.remove("slide-top");
  chatbotContainer.classList.add("slide-bottom");

  chatbotContainer.addEventListener("animationend", function handleClose() {
    chatbotContainer.style.display = "none";
    chatbotContainer.classList.remove("slide-bottom");
    chatbotContainer.removeEventListener("animationend", handleClose);

    // show toggle button on mobile after closing
    if (isMobile()) {
      chatbotToggle.style.display = "flex";
    }

    // reset the icon
    const icon = chatbotToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-comment");
  });
};
