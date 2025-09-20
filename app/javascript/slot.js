document.addEventListener("turbo:load", () => {
  const spinButton = document.getElementById("spin-button");
  const slots = document.querySelectorAll(".slot");

  if (!spinButton || slots.length === 0) return;

  const spinSound = new Audio("/sounds/spin.wav");
  const stopSound = new Audio("/sounds/stop.mp3");
  const winSound  = new Audio("/sounds/win.wav");
  const shineSound = new Audio("/sounds/shine.mp3");

  // 運勢一覧
  const fortunes = [
    { title: "超激アツ", description: "月にいきましょう!!!!", icon: "🌕" },
    { title: "激アツ",   description: "紅葉は綺麗だ!!!!", icon: "🍁" },
    { title: "アツイ",   description: "焚き火チャンス!!!!", icon: "🔥" },
    { title: "普通",     description: "栗です", icon: "🌰" },
    { title: "少し残念", description: "舞い散るだけ...", icon: "🍂" },
    { title: "ハズレ",   description: "ハズレ", icon: "🎃" },
    { title: "ヤバイ",   description: "今日は家で寝ましょう", icon: "💀" }
  ];

  const titleEl = document.getElementById("fortune-title");
  const descEl  = document.getElementById("fortune-desc");

  function resetSlots() {
    slots.forEach(slot => slot.textContent = "❓");
    titleEl.classList.add("hidden");
    descEl.classList.add("hidden");
  }

  function startSpin() {
    // 結果をランダムで決定
    const result = fortunes[Math.floor(Math.random() * fortunes.length)];

    resetSlots();
    spinSound.currentTime = 0;
    spinSound.play();

    let counter = 0;
    const icons = ["🌕", "🔥", "🌰", "🍂", "🎃", "💀"];
    const interval = setInterval(() => {
      slots.forEach(slot => {
        slot.textContent = icons[Math.floor(Math.random() * icons.length)];
      });
      counter++;

      if (counter > 20) { // 約2秒で停止
        clearInterval(interval);

        // リールを結果で揃える
        slots.forEach(slot => slot.textContent = result.icon);

        // 結果表示
        titleEl.textContent = `${result.icon} ${result.title}`;
        descEl.textContent  = result.description;
        titleEl.classList.remove("hidden");
        descEl.classList.remove("hidden");

        // 音
        spinSound.pause();
        spinSound.currentTime = 0;
        if (result.icon === "🌕") {
          winSound.play();
          setTimeout(() => shineSound.play(), 7000);
        } else {
          stopSound.play();
        }
      }
    }, 100);
  }

  spinButton.addEventListener("click", startSpin);
});