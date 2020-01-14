function keypressed(e) {
  const tone = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!tone) return;
  const keyPressed = document.querySelector(`.pianoKey[data-key="${e.keyCode}"]`);
  tone.play()
  tone.currentTime = 0;
  keyPressed.classList.add("pressed");
  setInterval(() => keyPressed.classList.remove("pressed"), 200)
}

window.addEventListener("keydown", keypressed)