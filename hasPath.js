const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbour of graph[src]) {
       if (hasPath(graph, neighbour, dst) === true) {
           return true;
       } 
    }

    return false;
};

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPath(graph, 'f', 'k')); //true
console.log(hasPath(graph, 'f', 'j')); //false
console.log(hasPath(graph, 'i', 'h')); //true