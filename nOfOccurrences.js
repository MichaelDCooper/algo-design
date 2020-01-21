function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

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
  return false;
}

function findCount(arr, foundInstance) {
  let count = 1;
  let left = foundInstance - 1;
  let right = foundInstance + 1;

  while (left >= 0 && arr[left] === arr[foundInstance]) {
    count += 1;
    left--;
  }

  while (right < arr.length && arr[right] === arr[foundInstance]) {
    count += 1;
    right++;
  }

  return count;
}

function nOfOccurences(arr, q) {
  let foundInstance = binarySearch(arr, q);

  if (foundInstance) {
    let totalInstances = findCount(arr, foundInstance);
    return totalInstances;
  }
  return "not found";
}

let testArr = [0, 0, 0, 1, 2, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 9, 10, 120];

nOfOccurences(testArr, 0);
// returns 3

nOfOccurences(testArr, 7);
// returns 7
