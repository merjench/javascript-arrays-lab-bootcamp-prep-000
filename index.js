var kittens = ['Milo','Otis','Garfield']; //define your array here

// Add your functions and code here
//Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
}
//Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
function destructivelyPrependKitten(name){
 kittens.unshift(name)
 return kittens;
}
