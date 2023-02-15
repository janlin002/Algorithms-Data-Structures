class Graph {
  constructor() {
    this.vertices = {} // 鄰接表
  }

  // 新增節點
  addVertex(vertex) {
    this.vertices[vertex] = []
  }

  // 新增邊
  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2)
    this.vertices[vertex2].push(vertex1) // 無向圖，所以要加上這行
  }

  // 列印圖
  printGraph() {
    const vertices = Object.keys(this.vertices)
    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i]
      const edges = this.vertices[vertex]
      let str = `${vertex} -> `
      for (let j = 0; j < edges.length; j++) {
        str += `${edges[j]} `
      }
      console.log(str)
    }
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'A')
graph.printGraph()
