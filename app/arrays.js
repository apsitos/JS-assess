exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    //iterate through the array, find the one that matches 'item', return its position
    for (i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        return i
      }
    }
    return -1
  },

  sum: function(arr) {
    return arr.reduce(function(acc, val) {
      return acc + val;
    }, 0)
    //this works in the console but not in the terminal
    // var total = 0
    // for (i = 0; i < arr.length; i++) {
    //   total += arr[i];
    // }
    // return total
  },

  remove: function(arr, item) {
    //iterate through 'arr' and find each instance of 'item', delete from 'arr'
    var newArr = []
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i])
      }
    } return newArr
  },

  removeWithoutCopy: function(arr, item) {
    //iterate through 'arr', find all instances of 'item', remove all but one, return 'arr'
    for(i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1)
          i--
        }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    var arr3 = arr1.concat(arr2)
    return arr3
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++
      }
    }
    return count
  },

  duplicates: function(arr) {
    //iterate through 'arr' and keep track of each number. If a number occurrs
    //more than once, increase its count.
    let obj = arr.reduce(function(array, num) {
      !array[num]? array[num] = 1 : array[num]++
      return array
    }, {})
    let newArray = []
    for (var item in obj) {
      if (obj.hasOwnProperty(item) && obj[item] > 1) {
        newArray.push(parseInt(item))
      }
    }
    return newArray
  },

  square: function(arr) {
    let squares = []
    for(let i = 1; i < arr.length+1; i++) {
      squares.push(i * i)
    }
    return squares
  },

  findAllOccurrences: function(arr, target) {

  }
};
