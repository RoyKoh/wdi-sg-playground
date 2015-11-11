// select HTML elements and store them in variables
var body = document.querySelector('body') // body element to listen for clicks
var title = document.querySelector('.title') // title bar
var tiles = Array.from(document.querySelectorAll('.tile')) // monitor tiles for 'X' and 'O'
var reset = document.querySelector('.reset') // reset button to reset the game
// create variables for the tic tac toe game
var player, moves, winner
resetBoard()

// Event listener on reset button
reset.addEventListener('click', resetBoard)

// function to reset the game
function resetBoard () {
  player = true
  moves = 1
  winner = ''
  title.textContent = player ? 'X\'s turn' : 'O\'s turn'
  tiles.forEach(tile => tile.textContent = '')
  reset.classList.add('hidden')
  body.addEventListener('click', tictactoe)
}

function tictactoe (event) {
  var tile = event.target
  if (tile.className !== 'tile') return
  if (tile.textContent) return
  tile.textContent = player ? 'X' : 'O'
  // find winner by checking tiles for 'X' and 'O'
  winner = findWinner()
  if (winner) {
    title.textContent = winner + ' wins!'
    body.removeEventListener('click', tictactoe)
    reset.classList.remove('hidden')
  } else if (moves === 9) {
    // it's a tie
    title.textContent = 'It\'s a tie!'
  } else {
    moves = moves + 1
    player = !player
    title.textContent = player ? 'X\'s turn' : 'O\'s turn'
  }
}

function findWinner () {
  // tiles layout by index
  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]
  var winningCombination = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                             [0, 3, 6], [1, 4, 7], [2, 5, 8],
                             [0, 4, 8], [2, 4, 6]]

  if (winningCombination.some(combo =>
    combo.every(tileIndex =>
      tiles[tileIndex].textContent === 'X'))) {
    return 'X'
  } else if (winningCombination.some(combo =>
    combo.every(tileIndex =>
      tiles[tileIndex].textContent === 'O'))) {
    return 'O'
  }
}
