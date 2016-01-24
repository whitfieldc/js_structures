var Queue = function(initialValue){
  if (!(initialValue === undefined)){
    this.queue = [initialValue];
  } else { this.queue = [] }
}

Queue.prototype.enqueue = function(newVal) {
  this.queue.unshift(newVal);
  return this.queue;
}

Queue.prototype.dequeue = function() {
  var dequeued = this.queue.pop();
  return dequeued;
}

var hello = new Queue("goodbye");

hello.enqueue("second");
hello.enqueue("third");
hello.enqueue("fourth");

console.log(hello.queue);

console.log(hello.dequeue()==="goodbye");
console.log(hello.dequeue()==="second");