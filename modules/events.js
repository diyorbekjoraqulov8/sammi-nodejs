const Evennts = require('events')

// class Logger extends Evennts {
//   log(a, b) {
//     this.emit('calculate', a + b)
//   }
// }

// const logger = new Logger()

// logger.on('calculate', data => {
//   console.log(data);
// })

// logger.log()

// class Dubble extends Evennts {
//   dubbleElement(array) {
//     this.emit('dubbleElement', array.map(item => item + item))
//   }
// }

// const nums = new Dubble()

// nums.on('dubbleElement', data => {
//   let err = data.filter(el => typeof el != 'number')
//   if (err.length > 0) {
//     console.log("All elements of the array must be Number");
//   } else {
//     console.log(data);
//   }
// })

// const texts = new Dubble()

// texts.on('dubbleElement', data => {
//   let err = data.filter(el => typeof el != 'string')
//   if (err.length > 0) {
//     console.log("All elements of the array must be String");
//   } else {
//     console.log(data);
//   }
// })


// nums.dubbleElement([1,2,3,4])
// texts.dubbleElement(['hi','my','it','he'])

class MiddleNum extends Evennts {
  middle(...nums) {
    let returnValue;
    const numbers = nums.filter(item => typeof item === 'number');

    if (numbers.length === 0) {
      console.log("Error: No numbers found in the array.");
      return;
    }
    
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
      const middleAverage = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
      returnValue = "Middle (average of two middle numbers):"+middleAverage
    } else {
      returnValue = "Middle:"+sortedNumbers[middleIndex]
    }
    this.emit('middleNum', returnValue)
  }
  
}

const numbers = new MiddleNum()

numbers.on('middleNum', data => {
  console.log(data);
})

numbers.middle(11,24,2,3,5,8,4,9,20,17,22)