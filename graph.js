const edge = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

//Given the edge above and 2 nodes (nodeA and nodeB) find if there be a path between these 2 nodes given
//if there be a path return TRUE otherwise FALSE

//build a graph in form of a object out of the given 2 dimensional array
const graphpath = (edges, nodeA, nodeB) => {
  let graph = buildGraph(edges);
  const set = new Set();
  // console.log(`log = `, set);
  const hasPath = (graph, src, dest, visited) => {
    if (src === dest) return true;
    if (visited.has(src)) {
      return false;
    }
    visited.add(src);
    for (let neigbour in graph[src]) {
      if (hasPath(graph, neigbour, dest, visited) == true) {
        return true;
      }
    }
    return false;
  };

  return hasPath(graph, nodeA, nodeB, new Set());
};
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = []; //another method to see
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

//console.log(`graphpath = `, buildGraph(edge));
//console.log(`graphpath = `, graphpath(edge, "0", "n"));

const hasPathCoord = (maze, start, dest) => {
  const totalRow = maze.length;
  const totalCol = maze[0].length;
  const direction = [
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 0],
  ];

  const traverse = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= totalRow ||
      col >= totalCol ||
      maze[row][col] === 1
    ) {
      return false;
    }
    maze[row][col] = 1;

    if (row === dest[0] && col === dest[1]) return true;

    for (let [pr, pc] of direction) {
      //const [pr, pc] = neigbour;
      console.log(`location = `, pr + row, pc + col);
      if (traverse(pr + row, pc + col)) return true;
    }

    return false;
  };

  return traverse(start[0], start[1]);
};

let mazer = [
  [1, 0, 1],
  [1, 0, 0],
  [1, 1, 1],
];

//console.log(`hasPathCoord = `, hasPathCoord(mazer, [0, 1], [1, 2]));


