class FortunesController < ApplicationController
  def index
    
  end

  def show
    fortunes = [
      { title: "超激アツ", description: "月にいきましょう!!!!", icon: "🌕"},
      { title: "激アツ", description: "紅葉は綺麗だ!!!!", icon: "🍁"},
      { title: "アツイ", description: "焚き火チャンス!!!!", icon: "🔥"},
      { title: "普通", description: "栗です", icon: "🌰"},
      { title: "少し残念", description: "舞い散るだけ...", icon: "🍂"},
      { title: "ハズレ", description: "ハズレ", icon: "🎃"},
      { title: "ヤバイ", description: "今日は家で寝ましょう", icon: "💀"},
    ]

    #ランダムに一つ選ぶ
    @fortune = fortunes.sample
  end
end
