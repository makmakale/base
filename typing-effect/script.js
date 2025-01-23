const words = ['Typing animation...', 'is very awesome.', "That's for sure.", 'Enjoy Coding!']

const speed = 100
const delay = 2000

let textIdx = 0
let charIdx = 0

const typedTextEl = document.getElementById('text')

function typing() {
  if (charIdx < words[textIdx].length) {
    typedTextEl.textContent += words[textIdx][charIdx]
    charIdx++
    setTimeout(typing, speed)
  } else {
    setTimeout(removeText, delay)
  }
}

function removeText() {
  if (charIdx > 0) {
    typedTextEl.textContent = words[textIdx].substring(0, charIdx - 1)
    charIdx--
    setTimeout(removeText, speed / 2)
  } else {
    textIdx = (textIdx + 1) % words.length
    setTimeout(typing, speed)
  }
}

typing()
