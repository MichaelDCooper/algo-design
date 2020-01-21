function binarySearch(arr, key) {
  const length = arr.length - 1;

  let start = arr[0];
  let end = arr[length];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
}
function handleSearch(arr, key, i) {
  bSearch = binarySearch(arr, key);
  if (bSearch !== 0) {
    return i, bSearch;
  }
}

function twoDSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    let test = arr[i];
    handleSearch(test, key, i);
  }
}

let twoDArr = [
  [0, 2, 4, 6],
  [8, 10, 12, 14],
  [16, 18, 20, 22]
];

twoDSearch(twoDArr, 14);
//returns 1,4
