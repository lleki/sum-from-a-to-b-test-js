
function sum(fromN, toN) {
  if(fromN === toN){
    if(fromN > 0){
      return fromN;
    }else{
    return fromN + toN;
    }
  }else if(fromN < toN){
    return fromN + sum(fromN + 1, toN);
  }

}

module.exports = sum;
