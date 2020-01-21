function modifiedBinarySearch(arr) {
  const length = arr.length - 1;

  let start = 0;
  let end = length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) {
      return mid;
    } else if (arr[mid] < mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
}
