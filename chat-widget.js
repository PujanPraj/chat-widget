(function () {
  // Create a style element
  const style = document.createElement("style");
  style.innerHTML = `
    .chatbot-container {
      position: fixed;
      bottom: 110px;
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
      font-size: 32px; 
      background-color: blue; 
      padding: 12px; 
      border-radius: 50%;
      position: fixed;
      bottom: 24px;
      right: 24px;
    }
  `;
  document.head.appendChild(style);

  // create the chatbot container
  const chatbotContainer = document.createElement("div");
  chatbotContainer.className = "chatbot-container";
  chatbotContainer.innerHTML = `
    <div class="chatbot-header"> 
      <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User" style="width: 48px; height: 48px;">
      <div>
        <h2>My Chatbot</h2>
        <p>Hello! We are here to assist you on anything.</p>
      </div>
    </div>

    <div class="chatbot-body">
       <img src="https://www.w3schools.com/w3images/avatar2.png" alt="User" style="width: 32px; height: 32px;">
        <p>Hi! I am AI bot</p>
        <p>How can I help you?</p>
    </div>

    <div class="chatbot-footer">
      <input type="text" id="chatInput" placeholder="Type your message">
      <button>
        <span>&#x2192;</span>
      </button>
    </div>
  `;
  document.body.appendChild(chatbotContainer);

  // create the chatbot toggle button
  const chatbotToggle = document.createElement("div");
  chatbotToggle.className = "chatbot-toggle";
  chatbotToggle.innerHTML = `<span class="toggle-btn">&#x1F4AC;</span>`;
  chatbotToggle.onclick = function () {
    const isOpen = chatbotContainer.style.display === "block";
    chatbotContainer.style.display = isOpen ? "none" : "block";
  };
  document.body.appendChild(chatbotToggle);
})();
