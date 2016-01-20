var Node = function(value, nextNode){
  if (nextNode === undefined){
    nextNode = null;
  }
  this.value = value;
  this.next = nextNode;
}

var end = new Node("end");

var start = new Node("beginning", end);

console.log(start.value);
console.log(start.next);

var LinkedList = function(firstNode){
  this.head = firstNode;
}

var listOne = new LinkedList(start);

console.log(listOne.head);