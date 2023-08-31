// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

  /* Write an ES2015 Version */

let double = arr => arr.map(num => num*2)



  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// Replace ALL functions with arrow functions:

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 ===0)




