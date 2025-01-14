const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined responses
const responses = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm just a bot, but I'm here to assist you!",
  "who are you":"I am Fine What about you",
  "what is java":"Java is a programming language and computing platform that is used to build applications and websites",
  "what is your Name":"I am Chatbot",
   "how can you help me":"Search any thing you want I am Trying to Answer your Question",
   "Hii":"Heyy !! Welcome Let's Talk ",
   "what is html":"HyperText Markup Language (HTML) is a markup language that's used to create and structure web pages. It's the primary standard language for organizing and formatting web content on the World Wide Web.",
   "what is CSS":"CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files .",
   "what is javascript":"JavaScript is a programming language that allows developers to create interactive web pages",
  "bye": "Goodbye! Have a great day!",
};

function addMessage(message, className) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${className}`;
  messageDiv.textContent = message;
  chatOutput.appendChild(messageDiv);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user-message");
    const botResponse = getBotResponse(userMessage.toLowerCase());
    setTimeout(() => addMessage(botResponse, "bot-message"), 500);
    userInput.value = "";
  }
}

function getBotResponse(message) {
  return responses[message] || "I'm sorry, I don't understand that.";
}

sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleUserInput();
});
