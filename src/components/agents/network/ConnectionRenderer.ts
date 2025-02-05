import { Node } from './Node';

export class ConnectionRenderer {
  static drawConnections(ctx: CanvasRenderingContext2D, nodes: Node[]) {
    nodes.forEach(node => {
      node.connections.forEach(connectedNode => {
        const dx = connectedNode.x - node.x;
        const dy = connectedNode.y - node.y;
        const distance = Math.hypot(dx, dy);
        
        // Simplified gradient for connections
        const gradient = ctx.createLinearGradient(
          node.x, node.y,
          connectedNode.x, connectedNode.y
        );
        
        const alpha = Math.max(0, 1 - distance / 300);
        gradient.addColorStop(0, node.color.replace('0.9', `${alpha * 0.5}`));
        gradient.addColorStop(1, connectedNode.color.replace('0.9', `${alpha * 0.5}`));

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connectedNode.x, connectedNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    });
  }
}