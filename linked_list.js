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

LinkedList.prototype.length = function() {
  var current = this.head
  var count = 0;
  var endFound = false;

  while (current && (endFound === false)){
    count ++;
    if (current.next){
      current = current.next;
    } else {endFound = true;}
  }

  return count;

};

var listOne = new LinkedList(start);
var listTwo = new LinkedList(end);
var listThree = new LinkedList();

console.log(listOne.head);
console.log(listOne.length());
console.log(listTwo.length());
console.log(listThree.length());
