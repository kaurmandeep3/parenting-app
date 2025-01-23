// Inject chatbot into the page
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <div class="chatbot-container">
    <div id="chat-window">
      <div id="messages"></div>
    </div>
    <div class="chat-input">
      <input type="text" id="user-input" placeholder="Ask a question..." />
      <button id="send-btn">Send</button>
    </div>
  </div>
  `
);
