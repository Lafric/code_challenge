export const Transformfibonacci = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let prev = 0;
    let current = 1;
    let small = 0;
    let great = 0;
    
    while (current < n) {
      const temp = current;
      current = prev + current;
      prev = temp;
      small = temp;
      great = current
    }
    
    const a = Math.abs(small - n)
    const b = Math.abs(great - n)
    
    if(a>b){
      return great
    }else{
    return small
    }
  }
}
