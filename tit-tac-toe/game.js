var currentPlayer = 'one'
var body = document.querySelector('body')
// declare var for winning X and winning O
var winningX = [['ax','dx','gx'],['bx','ex','hx'],['cx','fx','ix'],['ax','bx','cx'],['dx','ex','fx'],['gx','hx','ix'],['ax','ex','ix'],['gx','ex','cx']];
var winningO = [['ao','do','go'],['bo','eo','ho'],['co','fo','io'],['ao','bo','co'],['do','eo','fo'],['go','ho','io'],['ao','eo','io'],['go','eo','co']];
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
