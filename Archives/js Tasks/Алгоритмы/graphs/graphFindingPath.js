//Поиск в ширину в графе.
//Найти кратчайший путь из A в G, и существует ли он вообще
//При решении буде тиспользоваться структура данных "очередь"
/*
Изначально в очередь помещается только вершина s, и \rm used[s] = true, а для всех остальных вершин \rm used[] = false. 
Затем алгоритм представляет собой цикл: пока очередь не пуста, достать из её головы одну вершину, просмотреть все рёбра, 
исходящие из этой вершины, и если какие-то из просмотренных вершин ещё не горят, то поджечь их и поместить в конец очереди.
*/
let graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['q'];
graph.q = ['g'];

function breadthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        let current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]]
            console.log(queue);
        }
    }
    return false;
}