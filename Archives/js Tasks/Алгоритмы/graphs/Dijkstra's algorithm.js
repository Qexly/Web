//Учитывается также вес дуги
const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || 100000000;
        }
    }) //После прохода : {b: 2, c: 1, d: 100000000, e: 100000000, f: 100000000, g: 100000000}
    let node = findNodeLowerCost(costs, processed);  //Найти вершину, в которую можем попасть из a, и путь самый короткий
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCoast = cost + neighbors[neighbor];
            if (newCoast < costs[neighbor]) {
                costs[neighbor] = newCoast;
            }
        })
        processed.push(node);
        node = findNodeLowerCost(costs, processed);
    }

    return lowestNode;
}

function findNodeLowerCost(costs, processed) {
    let lowestCost = 100000000;
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowerCost = cost;
            lowestNode = node;
        }
    })
    return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));


