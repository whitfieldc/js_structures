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
  var current = this.head;
  var count = 0;
  var endFound = false;

  while (current && !(endFound)){
    count ++;
    if (current.next){
      current = current.next;
    } else { endFound = true; }
  }

  return count;

}

LinkedList.prototype.addElement = function(newNode) {
  var current = this.head;
  if (!current){
    this.head = newNode;
    return newNode;
  }
  var added = false
  while (current && !added){
    if(!current.next){
      current.next = newNode;
      added = true;
    } else { current = current.next; }
  }
  return newNode;
};

LinkedList.prototype.findElement = function(targetValue) {
  var current = this.head;
  if (!current){
    return false;
  }

  while (current){
    if(current.value === targetValue){
      return true
    } 
    else if (current.next){
      current = current.next
    }
    else { return false }
  }
};

var listOne = new LinkedList(start);
var listTwo = new LinkedList(end);
var listThree = new LinkedList();

console.log(listOne.head);
console.log(listOne.length());
var nodeThree = new Node("three");
listOne.addElement(nodeThree);
console.log(listOne.length());
console.log(listOne.head);

console.log(listOne.findElement("three"));
console.log(listOne.findElement("four"));
var nodeFour = new Node("four");
listOne.addElement(nodeFour);
console.log(listOne.findElement("four"));
console.log(listOne.findElement("beginning"));
console.log(listThree.findElement("beginning"));


