function fizzBuzz() {
   for(var i = 1; i <= 100; i++) {
       var info = "";
       if( !(i % 3) ) {
           info += "Fizz ";
       }
       if(!(i%5)) {
           info += "Buzz ";
       }
       console.log(info || i);
   }
}
fizzBuzz();