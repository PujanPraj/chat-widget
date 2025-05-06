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
      chatBody.scrollHeight - chatBody.scrollTop <= chatBody.clientHeight + 80;
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
