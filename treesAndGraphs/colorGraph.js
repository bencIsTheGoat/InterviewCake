function colorGraph(graph, colors) {

    const visited = new Set();
    const obj = {};

    for (let root of graph) {
        if (!visited.has(root)) {
            visited.add(root);
            const queue = [root];
            while (queue.length > 0) {
                const node = queue.shift();
                visited.add(node);
                if (node.label in obj) {
                    const noColors = obj[node.label];
                    for (const color of colors) {
                        if (!noColors.has(color)) {
                            node.color = color;
                            break;
                        }
                    }
                } else {
                    node.color = colors[0];
                }
                for (const child of node.neighbors) {
                    if (!visited.has(child)) {
                        if (child.label in obj) {
                            obj[child.label].add(node.color);
                        } else {
                            obj[child.label] = new Set();
                            obj[child.label].add(node.color);
                        }
                        queue.push(child);
                    }
                }
            }
        }

    }

}