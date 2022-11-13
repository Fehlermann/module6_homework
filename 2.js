function isPrime(n) {
  if (n == 0) {
    return 'Ноль';
  } 
  else if (n === 1) {
    return 'Простое число';
  }
  else if (n > 1000) {
   return 'Данные неверны';
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'Составное число';
    }
    i +=1;
  }
  
  return 'Простое число';
}

console.log(isPrime(1001));
