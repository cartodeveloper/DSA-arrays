class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  allocate(size) {
    // reverses a contiguous block of memory -> size of boxes : modifiable returning a pointer to the 1st box ir null if the allocation fails.
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }

  free(ptr) {} // frees the block of memory using allocate.

  copy(toIdx, fromIdx, size) {
    // copies size boxes of data from the pointer to the to pointer. ex. 0, 1, 2 to boxes 10, 11, and 12.
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  get(ptr) {
    // returns the value stored at a certain memory address. ptr= pointer.
    return this.memory[ptr];
  }

  set(ptr, value) {
    // set the value stored at a certain memory address(place in the arr)
    this.memory[ptr] = value;
  }
}

module.exports = Memory;
