document.querySelectorAll('ul li a').forEach((el) => {
  let rndChars = '!@#$%^&*()_+-<>?'
  let origin = el.dataset.text

  el.addEventListener('mouseover', () => {
    let iterations = 0
    let interval = setInterval(() => {
      el.textContent = [...origin]
        .map((char, i) => {
          if (i < iterations) return char
          return rndChars.charAt(Math.floor(Math.random() * rndChars.length))
        })
        .join('')

      if (iterations >= origin.length) clearInterval(interval)

      iterations += 1 / 3
    }, 50)
  })
})
