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
  var shifted = this.stack.shift();
  return shifted;
}

var hello = new Stack("goodbye");

hello.push("second");
hello.push("third");

console.log(hello.pop()==="third");