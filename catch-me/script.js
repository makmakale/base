const text = document.getElementById('text')

function randomPosition(max) {
  return Math.random() * max
}

function moveText() {
  const x = randomPosition(window.innerWidth - text.offsetWidth)
  const y = randomPosition(window.innerHeight - text.offsetHeight)
  text.style.left = `${x}px`
  text.style.top = `${y}px`
}

moveText()
text.addEventListener('mouseenter', moveText)
