(function () {
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
  --custom-chatbot-blue-color: rgba(91, 131, 205, 1);
  --custom-chatbot-pink-color: rgba(194, 128, 191, 1);
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

.chatbot-container {
  position: fixed;
  bottom: -750px;
  right: 24px;
  border-radius: 10px;
  width: 430px;
  height: 80vh;
  display: none;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.chatbot-header {
  display: flex;
  align-items: center;
  gap: 24px;
  /* background-color: var(--primary-background-color); */
  background-image: linear-gradient(
    to right,
    rgba(91, 131, 205, 1) 0%,
    rgba(194, 128, 191, 1) 100%
  );
  padding: 20px;
  border-radius: 10px 10px 0 0;
  color: white;
}

.chatbot-subheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  /* background-color: var(--primary-background-color); */
  background-image: linear-gradient(
    to right,
    rgba(91, 131, 205, 1) 0%,
    rgba(194, 128, 191, 1) 100%
  );
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
  background-color: white;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.chatbot-scroll-to-bottom {
  position: absolute;
  bottom: 80px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: opacity 0.3s;
}

.chatbot-scroll-to-bottom:hover {
  opacity: 0.8;
}

.message {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 7px 12px;
  border-radius: 7px;
  max-width: 60%;
  color: white;
}

.user-msg {
  align-self: flex-end;
  position: relative;
  /* background-color: var(--primary-background-color); */
  background-color: var(--custom-chatbot-pink-color);
}

.bot-msg {
  align-self: flex-start;
  position: relative;
  color: white;
  /* background-color: rgb(226, 255, 255); */
  background-color: var(--custom-chatbot-blue-color);
}

.message-bot {
  position: relative;
  display: flex;
  align-items: end;
  gap: 10px;
}

.message-bot i {
  font-size: 14px;
  /* background-color: var(--primary-background-color); */
  background-color: var(--custom-chatbot-blue-color);
  color: white;
}

#chatbot-input {
  width: 100%;
  padding: 12px;
  border: none;
  font-size: 16px;
  color: rgb(75, 75, 75);
}

#chatbot-input:focus {
  outline: none;
}

.chatbot-send-btn {
  cursor: pointer;
}

.chatbot-reset-btn {
  position: relative;
}

.chatbot-reset-underline {
  position: absolute;
  bottom: -2px;
  left: 0px;
  right: 0;
  height: 1px;
  width: 100%;
  background-color: lightgray;
  background: radial-gradient(
    circle at center,
    white 0%,
    lightgray 40%,
    transparent 70%
  );
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
  /* background-color: var(--primary-background-color); */
  background-image: linear-gradient(
    to right,
    rgba(91, 131, 205, 1) 0%,
    rgba(194, 128, 191, 1) 100%
  );
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
  /* color: var(--primary-background-color); */
  color: var(--custom-chatbot-blue-color);
  background-color: white;
  padding: 10px 8px;
  border-radius: 50%;
}

.fa-paper-plane {
  /* color: var(--primary-background-color); */
  color: var(--custom-chatbot-pink-color);
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

.chatbot-reset-date {
  text-align: center;
  font-size: 12px !important;
  color: #999;
  margin-bottom: 10px;
}

.chatbot-reset-msg {
  text-align: center;
  font-size: 12px !important;
  color: #999;
  margin: 15px 0;
}

.chatbot-reset-msg span {
  border: 1px solid var(--custom-chatbot-blue-color);

  padding: 10px;
  border-radius: 50px;
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

  .chatbot-scroll-to-bottom {
    bottom: 100px;
    right: 16px;
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
          <h2 style="margin: 0; font-size: 22px">My Chatbot</h2>
          <p style="font-size: 12px; margin: 4px 0 0 0px; color: #f1f1f1">
            Hello! We are here to assist you on anything.
          </p>
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

        <button id="chatbot-reset-btn" class="chatbot-reset-btn">
          <span>Reset</span>
          <span class="chatbot-reset-underline"></span>
        </button>
      </div>

      <!-- chatbot body -->
      <div class="chatbot-body"></div>

      <div
        class="chatbot-scroll-to-bottom"
        id="chatbot-scroll-to-bottom-btn"
      ></div>

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
    const clientId = currentScript?.getAttribute("data-client-id");
    console.log("🤖 Client ID:", clientId);

    // === SELECTORS ===
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbotContainer = document.querySelector(".chatbot-container");
    const chatInput = document.getElementById("chatbot-input");
    const sendBtn = document.getElementById("chatbot-send-btn");
    const chatBody = document.querySelector(".chatbot-body");
    const closeMobileBtn = document.querySelector(".chatbot-close-mobile-btn");
    const scrollBtn = document.getElementById("chatbot-scroll-to-bottom-btn");
    const resetBtn = document.getElementById("chatbot-reset-btn");

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
        chatbotContainer.addEventListener(
          "animationend",
          function handleClose() {
            chatbotContainer.style.display = "none";
            chatbotContainer.classList.remove("slide-bottom");
            chatbotContainer.removeEventListener("animationend", handleClose);
            updateToggleVisibility();
          }
        );
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
      chatInput.value = "";

      try {
        const response = await fetch(
          `https://sms.synctech.ai/receive-chat/?From=+9779843724273&To=19093421819&Text=?${userMessage}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("🤖 Response:", data);

        // add bot message
        const botMsgElement = document.createElement("div");
        botMsgElement.className = "message-bot";
        botMsgElement.innerHTML = `
      <i class="fa-solid fa-robot"></i>
      <div class="message bot-msg">
        <p class="chatbot-p">${data.response}</p>
      </div>
    `;
        chatBody.appendChild(botMsgElement);
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
      } catch (error) {
        alert("Failed to fetch response");
      }
    }

    // === CHAT RESET ===
    resetBtn.onclick = function () {
      chatBody.innerHTML = "";

      const now = new Date();
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const timeStamp = now.toLocaleString("en-US", options);

      const dateDiv = document.createElement("div");
      dateDiv.className = "chatbot-reset-date";
      dateDiv.innerHTML = `<span>${timeStamp}</span>`;

      const resetMsgElement = document.createElement("div");
      resetMsgElement.className = "chatbot-reset-msg";
      resetMsgElement.innerHTML = `<span>Reset the conversation</span>`;

      chatBody.appendChild(dateDiv);
      chatBody.appendChild(resetMsgElement);
    };

    // === EVENT LISTENERS ===
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
    window.addEventListener("resize", updateToggleVisibility);
    window.addEventListener("DOMContentLoaded", updateToggleVisibility);
    // Show/hide button on scroll
    chatBody.addEventListener("scroll", () => {
      const nearBottom =
        chatBody.scrollHeight - chatBody.scrollTop <=
        chatBody.clientHeight + 80;
      scrollBtn.style.display = nearBottom ? "none" : "block";
    });
    // Scroll to bottom on click
    scrollBtn.addEventListener("click", () => {
      chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: "smooth",
      });
    });
  })();
})();
