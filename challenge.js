class Stack {
  constructor() {
    this.array = []
    this.minimum = null
  }

  push(number) {
    this.array.push(number)
    if (this.minimum === null || number < this.minimum) {
      this.minimum = number
    }
    // your code here
  }
  
  pop() {
    const popped = this.array.pop()
    if (popped === this.minimum) {
      this.minimum = Math.min(...this.array)
    }
    // your code here
  }
  
  min() {
    return this.minimum
    // your code here
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
