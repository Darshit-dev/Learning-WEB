
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    iAtB(val) {
        let next = this.head;
        this.head = new Node(val, next)
        this.length++
        return this.head;
    }
    iAtE(val) {
        let currNode = this.head
        if (currNode) {
            while (currNode.next) {
                currNode = currNode.next
            }
            currNode.next =new Node(val)
        } else {
            this.head = new Node(val)
        }
        this.length++
        return this.head
    }
    iAtM(data,index){
        if(index!== 0 && index !== this.length &&this.length>1){
            let currNode = this.head
            let count = 0;

            while(count!==index-1){
                count++
                currNode = currNode.next
            }
            let prevNode= currNode
            let nextNode = prevNode.next
            console.log(nextNode);
            let newNode = new Node(data,nextNode)

            prevNode.next = newNode;
            this.length++
            return newNode
        }else{
            return 'Please check given index'
        }
    }


}

let list = new LinkedList();
list.iAtB(6)
list.iAtB(12)
list.iAtE(10)
console.log(list);
