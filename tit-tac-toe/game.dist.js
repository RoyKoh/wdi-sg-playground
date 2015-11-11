(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var currentPlayer = 'one';
var body = document.querySelector('body');
// declare var for winning X and winning O
var winningX = [['ax', 'dx', 'gx'], ['bx', 'ex', 'hx'], ['cx', 'fx', 'ix'], ['ax', 'bx', 'cx'], ['dx', 'ex', 'fx'], ['gx', 'hx', 'ix'], ['ax', 'ex', 'ix'], ['gx', 'ex', 'cx']];
var winningO = [['ao', 'do', 'go'], ['bo', 'eo', 'ho'], ['co', 'fo', 'io'], ['ao', 'bo', 'co'], ['do', 'eo', 'fo'], ['go', 'ho', 'io'], ['ao', 'eo', 'io'], ['go', 'eo', 'co']];
body.addEventListener('click', event => {
  console.log(event);
  var tile = event.target;
  console.log('i am here');
  if (event.target.className !== 'tile') return;
  console.log('i am here now');
  if (tile.textContent) return;
  if (currentPlayer === 'one') {
    tile.textContent = 'x';
    currentPlayer = 'two';
  } else {
    tile.textContent = 'o';
    currentPlayer = 'one';
  }
});

},{}]},{},[1]);
