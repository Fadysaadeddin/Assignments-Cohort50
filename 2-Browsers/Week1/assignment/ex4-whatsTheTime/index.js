/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();

  timeString.textContent = currentTime;
}

const timeString = document.createElement('p');

document.body.appendChild(timeString);

window.addEventListener('load', function () {
  setInterval(addCurrentTime, 1000);
});
