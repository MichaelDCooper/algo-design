function russianPeasant(n, m) {
  let final;
  let rollOver = 0;

  //checks for base cases
  if (n === 1 || m === 1) {
    if (n >= m) {
      final = n;
    } else {
      final = m;
    }
    return final;
  }

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
      // n was odd, updating rollover
      rollOver += m;
    }
    m = m * 2;
  }
  //combining last value of m and rolloever
  final = m + rollOver;
  console.log("final ", final);
  return final;
}

russianPeasant(5, 25); //125
russianPeasant(50, 65); //3250
