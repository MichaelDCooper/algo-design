function closestPair(x, y) {
  let xl, yl, xr, yr;
  [xl, xr] = createPartition(x);
  [yl, yr] = createPartition(y);

  let dl = closestPair(xl, yl);

  let dr = closestPair(yr, yl);

  let d = Math.min(dl, dr);

  m = createPartition(x)[0];

  let middleArr = []; 

  for(let i =0; i<x.length;i++){
    if(y[i] - x[i]<d){
      middleArr.push({y:y[i],x:x[i]}); 
    }
  }

  dminsq = Math.pow(d,2);  

  for(let i = 0; i<x.length-2){
    let k = i + 1; 
    while(k<= x.length -1 && middleArr[k].y - middleArr[i].x < dminsq){
    dminsq = Math.min(Math.pow((middleArr[k].x-middleArr[i].x),2)-Math.pow((middleArr[k].y-middleArr[i].y),2)); 
    k = k+1; 
    }
    return dminsq
  }

  console.log(xl, yl, xr, yr);
}

function createPartition(arr) {
  const findSize = arr.length / 2;
  let final = [],
    l = [],
    r = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= findSize) {
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }
  final.push(l, r);
  return final;
}
