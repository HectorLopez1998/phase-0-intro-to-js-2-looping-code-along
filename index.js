// Code your solutions in this file
function writeCards(names) {
  let arr = []

  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)

  }
  return arr;
}

function countDown(count) {
  let i = 0
  while (i <= count) {
    console.log(count - i);
    i++
  }
}
writeCards(["Ada", "Brendan", "Ali"], 1);
countDown();








