class LinkedList {
    constructor(){
        this.listHead = null;
    }

    append(value) {
        // When appending we add a value to the first node and because this is the last node 
        // we dont have to change nextNode which is null by default
        if(this.listHead === null) {
            this.listHead = new Node(value);
            console.log("head node -> " + this.listHead.value)
        } else {
            let lastNode = this.tail();
            console.log("last node-> " + lastNode.value);
            lastNode.nextNode = new Node(value);
            console.log("new last node-> " + lastNode.value);
        }
    }

    prepend(value) {
        const newNode = new Node(value); // Create a temp variable with a new node
        newNode.nextNode = this.listHead; // Set newNodes pointer to current node
        this.listHead = newNode; //  Update the head to be the new node
    }

    size() {
       let size = 0;
       let current = this.listHead // Start at the head
       while(current) { // While current is not null
        size++; // Size up
        current = current.nextNode; // Add a next node to a current node
       }
        return size;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let current = this.listHead;
        for (current; current && current.nextNode !== null; current = current.nextNode);
        return current;
      }
    
    at(index) {
        let current = this.listHead;
        
        for(let i = 0; i <= index; i++){
            console.log("current " + current.value);
            current = current.nextNode;
            console.log(current);
        }
        
    }
    pop(){
        let current = this.listHead;
        let previous = null;

        while (current.nextNode !== null){
            previous = current;
            current = current.nextNode;
        }
        
        if (previous === null) {
            this.listHead = null;
        } else {
            previous.nextNode = null;
        }

        console.log("Popped element: ", current.value);
        console.log("New list: ", this.listHead);

    }

    contains(value){
        let current = this.listHead;
        if (current.value === value){
            return console.log(true);
        } else {
            while(current.nextNode !== null){
                if (current.value === value){
                    return console.log(true);
                } else {
                    current = current.nextNode;
                }
            }
            return console.log(false);
        }
    }

    find(value){
        let current = this.listHead;
        let index = 0;
        for (current; current !== null; current = current.nextNode) {
            if (current.value === value){
                return console.log(index);
            } else {
                index ++;
            }
        }
        return console.log(null);
    }

    toString(){
        let current = this.listHead;
        let result = '';

        while (current !== null) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }

        result += 'null';
        console.log(result);
    }

    insertAt(value, index){
        let current = this.listHead;
        let size = 0;
        while (current !== null) {
            size++;
            current = current.nextNode;
        }

        if(index >=0 && index <= size) {
            let current = this.listHead;

            if (index === 0) {
                const newNode = new Node(value);
                newNode.nextNode = current;
                this.listHead = newNode;
            } else {
                for (let i = 0; i < index -1; i++){
                    current = current.nextNode;
                }

                const newNode = new Node(value);
                newNode.nextNode = current.nextNode;
                current.nextNode = newNode;
            
            }
            console.log("Node inserted at index", index);
        } else {
            console.log("Index is negative or bigger than list size");
        }
        console.log(this.listHead);
    }

    removeAt(index) {
        let current = this.listHead;
        let size = 0;
        while (current !== null) {
            size++;
            current = current.nextNode;
        }

        if(index >=0 && index <= size) {
            current = this.listHead;

            if (index === 0){
                this.listHead = current.nextNode;
            } else {
                for (let i = 0; i < index-1 ; i++){
                    current = current.nextNode;
                }
                current.nextNode = current.nextNode.nextNode;
            }
        }
        console.log(this.listHead);
    }
}

class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
console.log(list);

list.prepend(20);
console.log(list);

console.log("size:  ", list.size());
console.log("head: ", list.head());
console.log("tail: ", list.tail());
list.at(1);
list.pop();
list.contains(30);
list.find(30);
list.toString();
list.insertAt(40, 2);
list.removeAt(2);
