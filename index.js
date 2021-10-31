

// Test 1
var cats = ["Milo", "Otis", "Garfield"];

// Test 2
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Test 3
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Test 4
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

// Test 5
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

// Test 6
function appendCat(name) {
  return [...cats, name];
}

// Test 7
function prependCat(name) {
  return [name, ...cats];
}

// Test 8
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

//Test 9
function removeFirstCat() {
  return cats.slice(1);
}
