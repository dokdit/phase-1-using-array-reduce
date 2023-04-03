const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0
function reducer(accumulator, currentValue) {
    totalBatteries = accumulator + currentValue;
    return totalBatteries;
  }
  
  batteryBatches.reduce(reducer);