import { Node } from './Node';

export class NetworkManager {
  static createNetwork(width: number, height: number): Node[] {
    // Reduced number of nodes for better performance
    const numNodes = 30;
    const nodes: Node[] = [];
    
    // Create nodes with better distribution
    for (let i = 0; i < numNodes; i++) {
      nodes.push(
        new Node(
          Math.random() * width,
          Math.random() * height
        )
      );
    }

    // Simplified connection establishment
    nodes.forEach(node => {
      const nearestNodes = nodes
        .filter(n => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y);
          const distB = Math.hypot(b.x - node.x, b.y - node.y);
          return distA - distB;
        })
        .slice(0, 3); // Reduced connections per node
      
      node.connections = nearestNodes;
    });

    return nodes;
  }
}