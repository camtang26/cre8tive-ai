export class Node {
  x: number;
  y: number;
  radius: number;
  connections: Node[];
  color: string;
  glowIntensity: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 4 + 3; // Smaller nodes for better performance
    this.connections = [];
    this.glowIntensity = Math.random() * 0.3 + 0.7;
    
    // Simplified color palette with just 3 colors
    const colors = [
      'rgba(139, 92, 246, 0.9)',  // Vivid Purple
      'rgba(14, 165, 233, 0.9)',  // Ocean Blue
      'rgba(217, 70, 239, 0.9)',  // Magenta Pink
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Simplified drawing with just a glow effect
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius * 4
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.4, this.color.replace('0.9', '0.4'));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Core of the node
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * this.glowIntensity})`;
    ctx.fill();
  }
}