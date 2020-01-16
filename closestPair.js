//TODO figure out how to seperate elements in array into first half/second half

function closestPair(x, y) {
  const xlength = x.length;
  const ylength = y.length;

  let xl, xr, yl, yr;

  let xl = createPartition();
}

//helper function for pushing N/2 elements into array
function createPartition(arr, newArr, n) {
  for (let i = 0; i < n / 2; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
