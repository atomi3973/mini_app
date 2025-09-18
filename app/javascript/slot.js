document.addEventListener("turbo:load", () => {
  const slotMachine = document.getElementById("slot-machine");
  if (!slotMachine) return; //安全のため、Domが生成しない可能性もある

  const spinSound = new Audio("/sounds/spin.wav");
  const stopSound = new Audio("/sounds/stop.mp3");
  const winSound = new Audio("/sounds/win.wav");
  const shineSound = new Audio("/sounds/shine.mp3");

  const slots = slotMachine.querySelectorAll(".slot");
  const resultIcon = slotMachine.dataset.resultIcon; // データ属性から取得
  const icons = ["🌕", "🔥", "🌰", "🍂", "🎃", "💀"];

  let counter = 0;
  spinSound.volume = 0.4;
  spinSound.play();

  const interval = setInterval(() => {
    slots.forEach(slot => {
      slot.textContent = icons[Math.floor(Math.random() * icons.length)];// 少数✖️配列長さでランダムにしている、rubyではsampleがあるのにないっぽい
    });
    counter++;

    if (counter > 20) { // 約2秒で停止
      clearInterval(interval);
      slots.forEach(slot => slot.textContent = resultIcon); // 絵文字を揃える
      document.getElementById("fortune-title").classList.remove("hidden");
      document.getElementById("fortune-desc").classList.remove("hidden");
      spinSound.pause();
      spinSound.currentTime = 0;
      if (resultIcon !== "🌕") {
        stopSound.play();
      } else {
        winSound.play();
        setTimeout(() => {
          shineSound.play();
        }, 7000);
      }
      
    }
  }, 100);
});
