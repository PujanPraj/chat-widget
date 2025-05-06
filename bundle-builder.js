const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");

// Extract body content from HTML
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const bodyContent = bodyMatch ? bodyMatch[1].trim() : "";

const bundled = `(function () {
  // Inject faicon
  const faIcon = document.createElement('link');
  faIcon.rel = 'stylesheet';
  faIcon.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  document.head.appendChild(faIcon);

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = \`${css}\`;
  document.head.appendChild(style);

  // Inject HTML
  const wrapper = document.createElement('div');
  wrapper.innerHTML = \`${bodyContent}\`;
  document.body.appendChild(wrapper);

  // Execute JS
  ${js}
  })();
`;

fs.writeFileSync("chatbot-widget.js", bundled);
console.log("✅ chatbot-widget.js created!");
