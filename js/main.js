let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', add6)
document.querySelector('#zebra').addEventListener('click', mulitply2)
document.querySelector('#cantThinkOfAnything').addEventListener('click', divide3)
document.querySelector('#mexican').addEventListener('click', subtract5)

function makeZero() {
  total = 0
  document.querySelector('#pumpkin').innerText = total
}

function add6() {
  total = total + 6
  document.querySelector('#dominosPizza').innerText = total
}

function mulitply2() {
  total = total *2
  document.querySelector('#zebra').innerText = total
}

function divide3() {
  total = total / 3
  document.querySelector('#cantThinkOfAnything').innerText = total
}
function subtract5(){
  total=total - 5
  document.querySelector('#mexican').innerText = total
}
