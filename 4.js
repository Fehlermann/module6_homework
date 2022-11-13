function printNumbersInterval20_100() {
    var i = 5;
    var timerId = setInterval(function() {
      console.log(i);
      if (i == 15) clearInterval(timerId);
      i++;
    }, 1000);
  }
  
  printNumbersInterval20_100();