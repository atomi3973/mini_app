class FortunesController < ApplicationController
  def show
    fortunes = [
      { title: "超激アツ", description: "今日は20連確定!!!!", icon: "🚀"},
      { title: "激アツ", description: "今日は10連確定!!!!", icon: "🔥"},
      { title: "アツイ", description: "今日は5連いけるかも!!", icon: "🌊"},
      { title: "普通", description: "今日はぼちぼち", icon: "😗"},
      { title: "ガセ", description: "今日はガセ多めだなぁ", icon: "😡"},
      { title: "ハズレ", description: "今日はきつい", icon: "🥶"},
      { title: "帰ろう", description: "今日は家で寝ましょう", icon: "💀"},
    ]

    #ランダムに一つ選ぶ
    @fortune = fortunes.sample
  end
end
