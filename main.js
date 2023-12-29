let timerId;
    let startTime;
    let elapsedTime = 0;
    let isRunning = false;

    function start() {
      if (isRunning) return;
      isRunning = true;
      startTime = Date.now() - elapsedTime;
      timerId = setInterval(updateTime, 10);
    }

    function pause() {
      if (!isRunning) return;
      isRunning = false;
      clearInterval(timerId);
    }

    function reset() {
      pause();
      elapsedTime = 0;
      updateTimerText();
    }

    function updateTime() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      updateTimerText();
    }

    function updateTimerText() {
      const milliseconds = Math.floor(elapsedTime % 1000 / 10);
      const seconds = Math.floor(elapsedTime / 1000 % 60);
      const minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
      const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

      const timerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
      document.querySelector('.timer').textContent = timerText;
    }

    function formatTime(time) {
      return time.toString().padStart(2, '0');
    }