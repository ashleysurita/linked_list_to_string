function stringify(list) {
  let arr = [];
  let current = list
  
  while(current){
    arr.push(current.data.toString())
    current = current.next;
  }
  
  arr.push('null')
  return arr.join(' -> ')
}
