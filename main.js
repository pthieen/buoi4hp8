function taomang(n) { 
    this.length = n;
    for (var i=1; i<=n; i++){ 
      this[i]=0;
    }
    return this; 
}
var a = [];
a = new taomang();

function getMaxSubSum(a) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of a) {
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) partialSum = 0;
    }
  
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));