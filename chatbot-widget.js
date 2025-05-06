(function () {
  // Inject faicon
  const faIcon = document.createElement('link');
  faIcon.rel = 'stylesheet';
  faIcon.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  document.head.appendChild(faIcon);

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

:root {
  --primary-background-color: rgb(23, 147, 163);
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-bottom: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-background-color);
}

.chatbot-p {
  margin: 0;
  font-size: 15px;
}
.chatbot-h2 {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
}

img {
  margin-bottom: 8px;
}

.chatbot-container {
  position: fixed;
  bottom: -750px;
  right: 24px;
  border-radius: 10px;
  width: 450px;
  display: none;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  font-size: 15px;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

.chatbot-body {
  overflow-y: auto;
  padding: 20px;
  height: 480px;

  background-color: white;
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

#chatbot-input {
  width: 100%;
  padding: 12px;
  border: none;
  font-size: 18px;
}

#chatbot-input:focus {
  outline: none;
}

.chatbot-send-btn {
  cursor: pointer;
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

.chatbot-toggle-btn {
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
  padding: 10px 8px;
  border-radius: 50%;
}

.fa-paper-plane {
  color: var(--primary-background-color);
}

.chatbot-close-mobile-btn {
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

  .chatbot-close-mobile-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;
  document.head.appendChild(style);

  // Inject HTML
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<div class="chatbot-container slide-top">
      <!-- chatbot header -->
      <div class="chatbot-header">
        <i class="fa-solid fa-robot"></i>
        <div>
          <h2 class="chatbot-h2">My Chatbot</h2>
          <p class="chatbot-p">Hello! We are here to assist you on anything.</p>
        </div>
        <span class="chatbot-close-mobile-btn">
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
      <div class="chatbot-body"></div>

      <!-- chatbot footer -->
      <div class="chatbot-footer">
        <input
          type="text"
          id="chatbot-input"
          autocomplete="off"
          placeholder="Type your message"
        />
        <button id="chatbot-send-btn" class="chatbot-send-btn">
          <i class="fa-solid fa-paper-plane" style="font-size: 20px"></i>
        </button>
      </div>
    </div>

    <!-- chatbot toggle button -->
    <div class="chatbot-toggle">
      <span class="chatbot-toggle-btn"
        ><i class="fa-solid fa-comment" style="color: white"></i
      ></span>
      <span class="chatbot-toggle-btn-mobile"
        ><i class="fa-solid fa-comment" style="color: white"></i
      ></span>
    </div>`;
  document.body.appendChild(wrapper);

  // Execute JS
  (function () {
  const currentScript = document.currentScript;
  const clientId =
    currentScript?.getAttribute("data-client-id") || "default-client";
  console.log("🤖 Client ID:", clientId);

  // === SELECTORS ===
  const chatbotToggle = document.querySelector(".chatbot-toggle");
  const chatbotContainer = document.querySelector(".chatbot-container");
  const chatInput = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send-btn");
  const chatBody = document.querySelector(".chatbot-body");
  const closeMobileBtn = document.querySelector(".chatbot-close-mobile-btn");

  // === UTILITY ===
  function isMobile() {
    return window.innerWidth <= 527;
  }

  function updateToggleVisibility() {
    const isChatbotOpen = chatbotContainer.style.display === "flex";
    chatbotToggle.style.display = isMobile()
      ? isChatbotOpen
        ? "none"
        : "flex"
      : "flex";
  }

  // === TOGGLE CHATBOT ===
  chatbotToggle.onclick = function () {
    const isOpen = chatbotContainer.style.display === "flex";
    const icon = chatbotToggle.querySelector("i");
    const rotateClass = isOpen ? "rotate-center-reverse" : "rotate-center";

    icon.classList.add(rotateClass);
    icon.addEventListener("animationend", function handleRotation() {
      icon.classList.remove(rotateClass);
      icon.removeEventListener("animationend", handleRotation);
    });

    if (isOpen) {
      icon.classList.replace("fa-times", "fa-comment");
      chatbotContainer.classList.replace("slide-top", "slide-bottom");
      chatbotContainer.addEventListener("animationend", function handleClose() {
        chatbotContainer.style.display = "none";
        chatbotContainer.classList.remove("slide-bottom");
        chatbotContainer.removeEventListener("animationend", handleClose);
        updateToggleVisibility();
      });
    } else {
      icon.classList.replace("fa-comment", "fa-times");
      chatbotContainer.style.display = "flex";
      chatbotContainer.classList.remove("slide-bottom");
      chatbotContainer.classList.add("slide-top");
      updateToggleVisibility();
    }
  };

  // === CLOSE CHAT ON MOBILE ===
  closeMobileBtn.onclick = function () {
    chatbotContainer.classList.replace("slide-top", "slide-bottom");
    chatbotContainer.addEventListener("animationend", function handleClose() {
      chatbotContainer.style.display = "none";
      chatbotContainer.classList.remove("slide-bottom");
      chatbotContainer.removeEventListener("animationend", handleClose);

      const icon = chatbotToggle.querySelector("i");
      icon.classList.replace("fa-times", "fa-comment");
      updateToggleVisibility();
    });
  };

  // === CHAT SENDING LOGIC ===
  async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Add user message
    const userMsgElement = document.createElement("div");
    userMsgElement.className = "message user-msg";
    userMsgElement.innerHTML = `<p class="chatbot-p">${userMessage}</p>`;
    chatBody.appendChild(userMsgElement);
    // saveChatHistory();
    chatInput.value = "";

    try {
      const response = await fetch("https://dummyjson.com/products/1");
      const data = await response.json();

      // add bot message
      const botMsgElement = document.createElement("div");
      botMsgElement.className = "message-bot";
      botMsgElement.innerHTML = `
      <i class="fa-solid fa-robot"></i>
      <div class="message bot-msg">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Bot"
          style="width: 32px; height: 32px"
        />
        <p class="chatbot-p"><strong>${data.title}</strong></p>
        <p class="chatbot-p">${data.description}</p>
      </div>
    `;
      chatBody.appendChild(botMsgElement);
      // saveChatHistory();
      chatBody.scrollTop = chatBody.scrollHeight;
    } catch (error) {
      alert("Failed to fetch response");
    }
  }

  // // === LOAD CHAT FROM LOCALSTORAGE ===
  // const loadChatHistory = () => {
  //   const saved = localStorage.getItem("chatHistory");
  //   if (saved) {
  //     chatBody.innerHTML = saved;
  //     chatBody.scrollTop = chatBody.scrollHeight;
  //   }
  // };

  // === SAVE CHAT TO LOCALSTORAGE
  // const saveChatHistory = () => {
  //   localStorage.setItem("chatHistory", JSON.stringify(chatBody.innerHTML));
  // };

  // === EVENT LISTENERS ===
  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
  window.addEventListener("resize", updateToggleVisibility);
  window.addEventListener("DOMContentLoaded", updateToggleVisibility);
  // window.addEventListener("DOMContentLoaded", loadChatHistory);
})();

  })();
