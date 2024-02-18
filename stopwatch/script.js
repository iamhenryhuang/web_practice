let seconds = 0;
let m_seconds = 0;
const displayMSeconds = document.getElementById('m_seconds');
const displaySeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
let interval;

// button start
buttonStart.onclick = () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);
}

// button stop
buttonStop.onclick = () => {
  clearInterval(interval);
}

// button reset
buttonReset.onclick = () => {
  clearInterval(interval);
  m_seconds = 0;
  seconds = 0;
  displayMSeconds.innerHTML = `0${m_seconds}`;
  displaySeconds.innerHTML = `0${seconds}`;
}

const timer = () => {
  m_seconds++;

  if (Number(m_seconds) <= 9) {
    displayMSeconds.innerHTML = `0${m_seconds}`;
  }

  if (Number(m_seconds) > 9) {
    displayMSeconds.innerHTML = m_seconds;
  }

  if (Number(m_seconds) > 99) {
    seconds++;
    displaySeconds.innerHTML = `0${seconds}`;
    m_seconds = 0;
    displayMSeconds.innerHTML = `0${m_seconds}`;
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds;
  }
}
