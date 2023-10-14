// Configuration object
const config = {
    buttonId: "myButton",
    textId: "myText",
    greetingText: "Hello, World!",
  };
  
  // This function is executed when the page is fully loaded.
  window.onload = function () {
      // Access elements using the configuration object.
      const myButton = document.getElementById(config.buttonId);
      const myText = document.getElementById(config.textId);
  
      myButton.addEventListener("click", function () {
          myText.innerHTML = config.greetingText;
      });
  
      // Add more JavaScript code as needed for your specific functionality.
  }
  