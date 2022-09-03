
class Node{
    constructor(val){
        this.value=val;
        this.next=null;
        this.prev = null;
    }
}

/*
-head
-tail
-length
*/
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        //if head is empty
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode; //tail ke andar val,next,prev he
            newNode.prev = this.tail //this is old tail
            this.tail =newNode; //now we link tail with new node
        }
        this.length++
        return this
    }

    pop(){
        if(!head)return undefined
        let poppedNode = this.tail
        if(this.length===1){
            this.head=null
            this.tail=null
        }else{ //ptherwise update the tail
            this.tail = poppedNode.prev
            this.tail.next = null
        }
        this.length--
        return poppedNode
    }
}
let list = new DoublyLinkedList()
list.push(10)
list.push(20)
list.pop()
console.log(list);





