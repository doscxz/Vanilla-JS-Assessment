class Calculator {
  constructor(a, b) {
    this.a = a,
      this.b = b
  }
  add(a, b) {
    return this.a + this.b
  }
  subtract(a, b) {
    return this.a - this.b
  }
  multiply(a, b) {
    return this.a * this.b
  }
  divide(a, b) {
    const num = this.a / this.b
    if (num === 0) {
      return 'error 0'
    } else {
      return num
    }
  }
}

const cal = new Calculator(0, 12)
console.log(cal.add());
console.log(cal.subtract());
console.log(cal.multiply());
console.log(cal.divide());
