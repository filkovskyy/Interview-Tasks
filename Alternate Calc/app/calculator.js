exports.calculate = function (expr) {
  const actions = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  }

  if (expr === '0' || expr === '') return 0

  const expression = expr.split(' ')
  const calcStack = new Array()

  for (stackElement of expression.reverse()) {
    let number = parseInt(stackElement)
    if (number) {
      calcStack.push(number)
    } else if (Object.keys(actions).includes(stackElement)) {
      let a = calcStack.pop()
      let b = calcStack.pop()

      let result = actions[stackElement](a, b)
      calcStack.push(result)
    }
  }

  return calcStack.pop()
}
