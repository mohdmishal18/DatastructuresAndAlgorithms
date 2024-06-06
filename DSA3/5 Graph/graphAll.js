class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (vertex === undefined) {
        throw new Error("vertex is not defined");
      }
  
      const graph = this.adjacencyList;
      if (!graph[vertex]) {
        graph[vertex] = new Array();
      }
    }
  
    addEdge(vertex, edge, isBi) {
      // if argument is not recived throwing the error
      if (vertex === undefined || edge === undefined) {
        throw new Error('argemnet missing at "addEdge" method');
      }
      // if third argument is other than boolean
      if (typeof isBi != "boolean") {
        throw new Error("Third argument must be a boolean");
      }
  
      // assained list to varible
      const graph = this.adjacencyList;
  
      // checking given vertex is exists or not
      if (!graph[vertex]) {
        // if no vertex creating vertex
        this.addVertex(vertex);
      }
  
      // checking destination vertex is thier or not
      if (!graph[edge]) {
        // if no vertex creating destination vertex
        this.addVertex(edge);
      }
  
      // creating edge
      if(graph[vertex].indexOf(edge) === -1) {
        graph[vertex].push(edge);
      }
      
      // if edges biDirectional
      if (isBi === true ) {
        graph[edge].push(vertex);
      }
    }
  
    deleteEdge(vertex, edge) {
      // if argument is not recived throwing the error
      if (vertex === undefined || edge === undefined) {
        throw new Error('argemnet missing at "addEdge" method');
      }
      const graph = this.adjacencyList;
     // creating new array with filter and reassinig
      graph[vertex] = graph[vertex].filter(el => el != edge);
      graph[edge] = graph[edge].filter(el => el != vertex);
    }
  
    deleteVertex(vertex) {
       if(vertex === undefined) {
        throw new Error('cannot delete null vertex');
       }
       const graph = this.adjacencyList;
       // checking the length of the list
       while(graph.length != 0) {
        // taking each connection from the list
         const edge = graph[vertex].pop();
         // calling the remove edge function 
         this.deleteEdge(vertex, edge);
       }
       delete graph[vertex];
    }
  
    bfs(vertex) {
      const queue = [vertex];
      const visited = {vertex: true};
      const result = new Array();
      const graph = this.adjacencyList;
      while(queue.length != 0) {
        const currentVertex = queue.shift();
        result.push(currentVertex);
         graph[currentVertex].forEach(edge => {
             if(!visited[edge]) {
               visited[edge] = true;
               queue.push(edge);
             }
         })
      }
      return result;
    }
  
    dfs(vertex) {
      const result = new Array();
      const graph = this.adjacencyList;
      const visited = new Object()
  
      function dfsHelper(vertex) {
         visited[vertex] = true;
         result.push(vertex);
         for(const edges of graph[vertex]) {
             if(!visited[edges]) {
               return dfsHelper(edges);
             }
         }
      } 
      dfsHelper(vertex);
      return result;
    }
  }
  
  
  const graph = new Graph();
  graph.addEdge(1, 2, false);
  graph.addEdge(1, 3, false);
  graph.addEdge(2, 3, false);
  console.log(graph.bfs(1));
  console.log(graph.dfs(1))