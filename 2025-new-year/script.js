function createSpark() {
  const spark = document.createElement('div')
  spark.classList.add('spark')

  const rndX = Math.random() * window.innerWidth
  const rndY = Math.random() * window.innerHeight

  spark.style.left = `${rndX}px`
  spark.style.top = `${rndY}px`
  spark.style.filter = `hue-rotate(${Math.random() * 360}deg)`
  spark.style.transform = `scale(${Math.random() * 5})`

  for (let index = 0; index <= 7; index++) {
    let span = document.createElement('span')
    span.style.transform = `rotate(${index * 45}deg)`
    spark.appendChild(span)
  }

  document.body.appendChild(spark)

  setTimeout(function () {
    spark.remove()
  }, 2000)
}

setInterval(createSpark, 200)
