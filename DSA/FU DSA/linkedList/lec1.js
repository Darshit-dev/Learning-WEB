// class Node{
//     constructor(data,next=null){
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.fistNode = null;
//         this.lastNode=null;

//     }

//     //insertion function
//     insertInFront(data){
//         //node is created 
//         //does not linked with any  list
//         const node = new Node(data)
//         console.log(node);
//         //if if our first node is weather exits or not
//     }
// }
// LinkedList.insertInFront(25)



// let LinkedList = {
//     head:{
//         value:10,
//         next:{
//             value:16,
//             next: {value:20, next:null}
//         }
//     }
// }
// console.log(LinkedList);

class LinkedList{
    constructor(data){
        this.head ={
            value: data,
            next: null //initially next ko null define kardege
        }
        this.tail = this.head
        this.length = 1;
    }

     //? ---append element -----
    append(data){
        const newNode = {
            value: data,
            next:null
        }

        //
        this.tail.next = newNode //very important main logic
        this.tail =newNode;
        this.length ++
    } 

    //? ---prepend element -----
    prepend(data){
        const newNode = {
            value:data,
            next:null
        }

        newNode.next = this.head; //imp logic   // means ke head ki jo value he vo newNode ke next me assign kardi
        this.head = newNode // fir head ki value ko newNode se replace kar diya
    }

    // 2 10-->16-->20
    // \ / 
    //  4

    //? ---inserting element ------
    traversing(req){
        let counter = 0;
        let currNode = this.head //we assigned head value to new variable called currNode

        //to traverse linked list 
        while(counter !=req){
            counter++
            currNode = currNode.next
            console.log(currNode);
        }
        return currNode
    }


    insert(index,data){  //every time we will create new node
        const newNode = {
            value:data,
            next:null
        }
        //firstofall grab index 

        //we first grab index-1 value
        const leaderNode = this.traversing(index-1)
        const nextNode = leaderNode.next
        leaderNode.next = newNode
        newNode.next = nextNode
    }

    //remove element
    // 2--> 10-->16-->20
    //  \ / 
    //   4
    
    delete(index){ 
        const leaderNode = this.traversing(index-1) //2
        const UnwantedNode =leaderNode.next //4
        const nextNode = UnwantedNode.next  // 10
        
        leaderNode.next = nextNode // 2--> 10-->16-->20
        this.length--
    }


    //[2,10,16,20]
    reverse(){
        var node = this.head;//2
        this.head = this.tail; // swaping with 2 and 20
        this.tail = node; //2-->10-->16-->20
        console.log(this.head);
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
  
}





//class ko call karne ke liye ek obj bana rahe he
const myList = new LinkedList(10);
console.log(myList);
//first node created successfully
myList.append(16)
myList.append(20)
myList.prepend(2)
myList.insert(1,50)
myList.delete(1) //it is index
myList.reverse()

console.log(myList);


let a = [2]
let b = [2]
console.log(a==b);
console.log(a===b);