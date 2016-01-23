var Stack = function(initialValue){
  if (!(initialValue === undefined)){
    this.stack = [initialValue];
  } else { this.stack = [] }
}

Stack.prototype.push = function(newVal) {
  this.stack.unshift(newVal);
  return this.stack;
}

Stack.prototype.pop = function() {
  this.stack.shift();
  return this.stack;
}

var hello = new Stack("goodbye");
console.log(hello);

hello.push("goodbye again");
console.log(hello);
console.log(hello.stack);
hello.pop();
console.log(hello);