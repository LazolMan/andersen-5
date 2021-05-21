class Stack {
  constructor(maxLength = 10) {
    if (!Number.isInteger(maxLength)) {
      throw new Error("Max Length isn't integer");
    }

    this.maxLength = maxLength;
    this.data = [];
    this.top = 0;
  }

  push(element) {
    if (this.top === this.maxLength) {
      throw new Error("Stack is full");
    }

    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    this.top = this.top - 1;
    const lastItem = this.data[this.top];
    delete this.data[this.top + 1];

    return lastItem;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  toArray() {
    return this.data;
  }

  fromIterable(iterable) {
    const arr = Array.from(iterable);
    const iterStack = new Stack(arr.length);

    for (let i = 0; i < arr.length; i++) {
      iterStack.push(arr[i]);
    }

    return iterStack;
  }
}

module.exports = { Stack };
