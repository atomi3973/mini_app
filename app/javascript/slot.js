document.addEventListener("turbo:load", () => {
  const slotMachine = document.getElementById("slot-machine");
  if (!slotMachine) return; //安全のため、Domが生成しない可能性もある

  const slots = slotMachine.querySelectorAll(".slot");
  const resultIcon = slotMachine.dataset.resultIcon; // データ属性から取得
  const icons = ["🌕", "🔥", "🌰", "🍂", "🎃", "💀"];

  let counter = 0;
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
    }
  }, 100);
});
