const scriptURL =
  'https://script.google.com/macros/s/AKfycbxBgOQd5mp_yXlF7QvSVhD-vU07P7KRpc-rq6Cg8A_3nWWIRD9YCXO4M55F-i3mk-9k/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Thank You For Subscribing!'
      setTimeout(function () {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error('Error!', error.message))
})
