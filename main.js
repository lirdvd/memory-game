const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
];

function shuffle(arr) {
    
}


function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
  }


for (let i = 0; i < 100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
    if (a1 == a2) {
        1--;
        continue;
    }
    swap(arr, a1, a2)
}


function check(arr, i, j) {
    return arr[i].name == arr[j].name && i != j
}


function main() {
    console.log([...cards]);
    shuffle(cards);
    console.log(cards);
}

main();