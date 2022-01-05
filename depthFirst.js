const iterativeDepthFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
};

const recursiveDepthFirstPrint = (graph, source) => {
    console.log(source);
    for (let neighbour of graph[source]) {
        recursiveDepthFirstPrint(graph, neighbour);
    }
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

iterativeDepthFirstPrint(graph, 'a');
console.log('Above is iterative, below is recursive');
recursiveDepthFirstPrint(graph, 'a');