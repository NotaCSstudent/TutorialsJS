/*
Binary search tree is an algorithim that represents a tree. Nodes are the leaves of the tree.

Each tree must have two nodes in the Binary search tree. Hence why its called Binary.

This is to make searches quick.

The saearch tree will also have ordered pairs.


Nodes are comparable to Pointers in comp sci

*/












class Node {//Node class will be for Node travel
    constructor(data, left=null, right=null){
        this.data = data;//Stores Data
        this.left = left; //Pointer for left side of the tree
        this.right = right;//Pointer for the right side of the tree
    }
}


class BST{
    constructor(){//Constructing the root Node
        this.root = null;//Root Node
    }
    add(data){ //Will refrence to root node when adding data
        const node = this.root;
        if(node===null){// If the statemant is null, data will be added
            return;
        }
        else{ //else if will keep searching for null data points
            const treesearch = function(node){//Create a function to find a null node
                if (data < node.data){//For smaller data points to go to the left
                    if(node.left === null){// If the node is null
                        node.left = new Node(data); //Places node into null area
                        return;
                    }
                    else if(node.left != null){///If node is not NULL
                        return treesearch(node.left)//recursive function to go to another node.

                    }
                }
                else if(data > node.data){//Larger data goes to the right
                    node.right = new Node(data);
                    if(node.right === null){//If node is empty, place data into node
                        node.right = new Node(data);
                    return;
                    }

                else if(node.right != null){//If its not empty
                    return searchTree(node.right);//Keep going to the right
                }
                else{
                    return null;
                };

                }
                return searchTree(node);
            };
        };
    };
};

