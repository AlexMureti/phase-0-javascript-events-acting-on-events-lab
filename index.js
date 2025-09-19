/**
 *  moveDodgerLeft()
    1) moves the DODGER to the left

  moveDodgerRight()
    2) moves the DODGER to the right


  0 passing (558ms)
  2 failing

  1) moveDodgerLeft()
       moves the DODGER to the left:
     ReferenceError: moveDodgerLeft is not defined
      at Context.<anonymous> (test/indexTest.js:12:5)
      at process.processImmediate (node:internal/timers:485:21)

  2) moveDodgerRight()
       moves the DODGER to the right:
     ReferenceError: moveDodgerRight is not defined
      at Context.<anonymous> (test/indexTest.js:34:5)
      at process.processImmediate (node:internal/timers:485:21)
 */


moveDodgerLeft = () => {
  let left = dodger.style.left
  left = parseInt(left)
  left -= 10
  dodger.style.left = left + 'px'
}

moveDodgerRight = () => {
  let left = dodger.style.left
  left = parseInt(left)
  left += 10
  dodger.style.left = left + 'px'
}

