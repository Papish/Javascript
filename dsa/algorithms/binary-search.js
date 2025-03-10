function binarySearch(arr, target) {
    let lp = 0;
    let rp = arr.length - 1;
  
    // this <= is for, if arr contains single element
    while(lp <= rp) {
      const m = Math.floor((lp + rp) / 2)
      if (arr[m] === target) {
        return true;
      } else {
        if (arr[m] < target) {
          lp = m + 1; // no need to account for middle since its already checked above
        } else {
          rp = m - 1;
        }
      }
    } 
  
    return false;
  }
  
  console.log(binarySearch([1], 1));
  