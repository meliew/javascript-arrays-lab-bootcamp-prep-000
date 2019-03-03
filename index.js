var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, kitten) {

kittens.push("Ralph");

}

function destructivelyPrependKitten(array, kitten) {

  kittens.unshift("Bob")

}

function destructivelyRemoveLastKitten(array) {
kittens.pop();

}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift();

}

function appendKitten(newArray, array, element) {
  return newArray = [...kittens, "Broom"]
}
