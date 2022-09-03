/*class Stack{
    constructor(){ //what should be in arrray
        this.array = [];
    }

    //Now let's move toward push and pop operation
    append(data){
        this.array.push(data);
    }
    display(){
        console.log(this.array);
    }

    //Stack always work with top variable
    //so we need to define pick function to display top element
    peak(){
        console.log(this.array[this.array.length-1]); // it is always last index
    }

    remove(){ //to delete we use pop function
        this.array.pop()
    }


}

const mystack = new Stack()
mystack.append(5)
mystack.append(5)
mystack.append(9)
//mystack.remove()
mystack.peak()
mystack.display()
*/

//stack using linkedList  

//every value ko store karne ke liye node bhi to banana padega
class Node{
    constructor(data){
        this.value =data
        this.next = null
    }
}

class Stack{ // 2-->34-->23
    constructor(){
        this.top = null; 
        this.length = 0
    }

    append(){
        //create new node first
        const myNode = new Node(data)
        //check weather the stack is empty or note
        if(this.length==0){
            this.top  = myNode
        }else{
            //ek holding pointer le lege
        }

    }
}

