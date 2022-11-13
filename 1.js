function getAmount(){
const Even = (K) => K % 2 === 0;
const Odd = (K)  => K % 2 != 0;
const arr = [1,2,3,4,5,6,7,8,9,10];
 
const evenAmount = arr.filter(Even).length;
const oddAmount = arr.filter(Odd).length;
console.log(evenAmount)
console.log(oddAmount)}
getAmount()
