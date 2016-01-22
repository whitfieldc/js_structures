var Stack = function(initialValue){
  if (!(initialValue === undefined)){
    this.stack = [initialValue];
  } else { this.stack = [] }
}

Stack.prototype.push = function(newVal) {
  this.stack.unshift(newVal);
}

var hello = new Stack("goodbye");
console.log(hello);

hello.push("goodbye again");
console.log(hello);
console.log(hello.stack);