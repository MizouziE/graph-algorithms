//Depth First solution
const hasPathDF = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbour of graph[src]) {
       if (hasPathDF(graph, neighbour, dst) === true) {
           return true;
       } 
    }

    return false;
};

//Breadth First solution
const hasPathBF = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift();
        
        if (current === dst) return true;
        
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }

    return false;
};

// NOTE: the below graph is acyclic so we have not
// needed to account for getting trapped in a cycle
// in the above logic

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPathDF(graph, 'f', 'k')); //true
console.log(hasPathDF(graph, 'f', 'j')); //false
console.log(hasPathDF(graph, 'i', 'h')); //true
console.log('Above is Depth First, below is Breadth First')
console.log(hasPathBF(graph, 'f', 'k')); //true
console.log(hasPathBF(graph, 'f', 'j')); //false
console.log(hasPathBF(graph, 'i', 'h')); //true