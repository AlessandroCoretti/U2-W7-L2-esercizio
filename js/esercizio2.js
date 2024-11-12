let time = parseInt(sessionStorage.getItem("elapsedTime")) || 0;

function updateTimer() {
  time++;

  sessionStorage.setItem("elapsedTime", time);

  document.getElementById("timer").textContent = time;
}

setInterval(updateTimer, 1000);
