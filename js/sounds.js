
export default function() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgTreeAudio = new Audio("./audios/Floresta.wav")
    const bgShopAudio = new Audio("./audios/Cafeteria.wav")
    const bgRainAudio = new Audio("./audios/Chuva.wav")
    const bgFireAudio = new Audio("./audios/Lareira.wav")
  
  
    function pressButton() {
      buttonPressAudio.play()
    }
  
    function timeUp() {
      kitchenTimer.play()
    }


    return {
      pressButton,
      timeUp,
      bgTreeAudio,
      bgShopAudio,
      bgRainAudio,
      bgFireAudio
    }
  }
