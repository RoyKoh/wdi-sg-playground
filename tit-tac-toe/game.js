var currentPlayer = 'one'
var body = document.querySelector('body')
// declare var for winning X and winning O
body.addEventListener('click', event => {
  console.log(event)
  var tile = event.target
  console.log('i am here')
  if (event.target.className !== 'tile') return
  console.log('i am here now')
  if (tile.textContent) return
  if (currentPlayer === 'one') {
    tile.textContent = 'x'
    currentPlayer = 'two'
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one'
  }
})
