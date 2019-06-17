class GraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
}

function colorGraph(graph, colors) {
    for (const node of graph) {
        const illegalColors = new Set();
        for (const child of node.neighbors) {
            if (child.color) illegalColors.add(child.color);
            if (child === node) throw new Error('loop graph')
        }
        for (const color of colors) {
            if (!illegalColors.has(color)) {
                node.color = color;
                break;
            }
        }
    }
}

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