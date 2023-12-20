let speech = new SpeechSynthesisUtterance()
let button = document.querySelector('button')
let textArea = document.querySelector('textarea')
let voiceSelect = document.querySelector('select')

let voices = []

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices()
  speech.voice = voices[0]

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  )
}

voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value]
})

button.addEventListener('click', () => {
  speech.text = textArea.value
  window.speechSynthesis.speak(speech)
})
