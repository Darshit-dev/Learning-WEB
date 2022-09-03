 class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        if(this.stack1.length==0){
            this.stack1.push(value)
        }else{
            //stack 1 se value nikalne ke liye
            while (this.stack1.length!=0) {
                //to add stack 1 data into 2
                this.stack2.push(this.stack1[this.stack1.length-1])
                //stack 1 me pop bhi karna padega
                this.stack1.pop()
            }
            //ab naye wale data ko stack 1 me bhi dalna padega
            this.stack1.push(value)

            //stack 2 se sara data nikalke stack 1 me nikalna he
            while (this.stack2.length!=0) {
                //to add stack 2 data into 1
                this.stack1.push(this.stack2[this.stack2.length-1])
                //stack 2 me pop bhi karna padega
                this.stack2.pop()
            }
        }
    }
    display(){
   //now our stack 1 is became queue so display it
   console.log(this.stack1);
    }

    duqueue(){
        this.stack1.pop()
    }
 }

 const myq = new Queue()
 myq.enqueue(2)
 myq.enqueue(3)
 myq.enqueue(4)
 myq.duqueue()
 myq.display()