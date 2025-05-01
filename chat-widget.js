(function () {
  // Create a style element
  const style = document.createElement("style");

  const faLink = document.createElement("link");
  faLink.rel = "stylesheet";
  faLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
  document.head.appendChild(faLink);

  style.innerHTML = `
    .chatbot-container {
      position: fixed;
      bottom: -700px;
      right: 24px;
      border-radius: 10px;
      width: 480px;
      display: none;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .chatbot-header {
      display: flex;
      align-items: center;
      gap : 24px;
      background-color: blue;  
      padding: 10px 20px;
      border-radius: 10px 10px 0 0;
      color: white
    }

    .chatbot-header > div {
      line-height: 10px;
    }
    .chatbot-body {
      padding: 20px;
      height: 480px;
      border-bottom: 1px solid #ccc;
    }

    input {
      width: 100%;
      padding: 12px;
      border:none;
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
      background-color: white
    }

    .toggle-btn {
      cursor: pointer; 
      font-size: 28px; 
      background-color: blue; 
      padding: 14px; 
      width: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: fixed;
      bottom: 24px;
      right: 24px;
    }

    .slide-top{
      -webkit-animation:slide-top .2s cubic-bezier(.25,.46,.45,.94) both;animation:slide-top .2s cubic-bezier(.25,.46,.45,.94) both
    }
    @-webkit-keyframes slide-top{
      0% {
        -webkit-transform:translateY(0);transform:translateY(0)
      }
      100%{
        -webkit-transform:translateY(-800px);transform:translateY(-800px)
      }
    }
    @keyframes slide-top{
      0% {
        -webkit-transform:translateY(0);transform:translateY(0)
      }
      100%{
        -webkit-transform:translateY(-800px);transform:translateY(-800px)
      }
    }

    .slide-bottom {
      -webkit-animation: slide-bottom 0.2s both;
      animation: slide-bottom 0.2s both;
    }
    @-webkit-keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-800px);
        transform: translateY(-800px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-800px);
        transform: translateY(-800px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // create the chatbot container
  const chatbotContainer = document.createElement("div");
  chatbotContainer.className = "chatbot-container slide-top";
  chatbotContainer.innerHTML = `
    <div class="chatbot-header"> 
      <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User" style="width: 48px; height: 48px;">
      <div>
        <h2>My Chatbot</h2>
        <p>Hello! We are here to assist you on anything.</p>
      </div>
    </div>

    <div class="chatbot-body ">
       <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User" style="width: 32px; height: 32px;">
        <p>Hi! I am AI bot</p>
        <p>How casn I help you?</p>
    </div>

    <div class="chatbot-footer">
      <input type="text" id="chatInput" placeholder="Type your message">
      <button>
        <span><i class="fa-solid fa-paper-plane" style="font-size:20px"></i></span>
      </button>
    </div>
  `;
  document.body.appendChild(chatbotContainer);

  // create the chatbot toggle button
  const chatbotToggle = document.createElement("div");
  chatbotToggle.className = "chatbot-toggle";
  chatbotToggle.innerHTML = `<span class="toggle-btn"><i class="fa-solid fa-comment" style="color: white;"></i></span>`;
  chatbotToggle.onclick = function () {
    const isOpen = chatbotContainer.style.display === "block";
    if (isOpen) {
      chatbotToggle.innerHTML = `<span class="toggle-btn"><i class="fa-solid fa-comment" style="color: white;"></i></span>`;
      chatbotContainer.classList.remove("slide-top");
      chatbotContainer.classList.add("slide-bottom");
      chatbotContainer.addEventListener("animationend", function handleClose() {
        chatbotContainer.style.display = "none";
        chatbotContainer.classList.remove("slide-bottom");
        chatbotContainer.removeEventListener("animationend", handleClose);
      });
    } else {
      chatbotToggle.innerHTML = `<span class="toggle-btn"><i class="fa-solid fa-times" style="color: white;"></i></span>`;
      chatbotContainer.style.display = "block";
      chatbotContainer.classList.remove("slide-bottom");
      chatbotContainer.classList.add("slide-top");
    }
  };
  document.body.appendChild(chatbotToggle);
})();
