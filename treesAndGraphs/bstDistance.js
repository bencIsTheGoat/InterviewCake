function bfsGetPath(graph, startNode, endNode) {
    const val = { node: startNode, dist: 0, path: [startNode] };
    const max = [Infinity, null];
    const queue = [val];
    const visited = new Set();
    visited.add(startNode);
    while (queue.length > 0) {
        const { node, dist, path } = queue.shift();
        visited.add(node);
        if (node === endNode && dist < max[0]) {
            max[0] = dist;
            max[1] = path;
        }
        for (const child of graph[node]) {
            if (visited.has(child)) continue;
            const newPath = [...path, child]
            const newVal = { node: child, dist: dist + 1, path: newPath };
            queue.push(newVal);
        }
    }
    return max[1]
}