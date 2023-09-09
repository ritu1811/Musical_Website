const pianoKeys = document.querySelectorAll('.key')

function playSound(NewUrl) {
  // new Audio('24-piano-keys/key03.mp3').play();
  console.log(NewUrl)
  new Audio(NewUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    console.log(i)
  const number = i <= 9 ? '0' + (i + 1).toString() : (i + 1).toString()
  const NewUrl = '24-piano-keys/key' + number + '.mp3'
  
  pianoKey.addEventListener('click', () => playSound(NewUrl))  
})
