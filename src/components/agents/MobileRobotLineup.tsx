import { useEffect, useRef } from 'react';
import { ROBOTS } from './types/RobotTypes';
import * as THREE from 'three';

export const MobileRobotLineup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const robotsRef = useRef<THREE.Group[]>([]);

  const createRobotModel = (robotData: typeof ROBOTS[0]) => {
    const robotGroup = new THREE.Group();

    // Head
    const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: robotData.color,
      emissive: robotData.color,
      emissiveIntensity: 0.4,
      shininess: 30
    });
    const headMesh = new THREE.Mesh(headGeometry, headMaterial);
    headMesh.position.set(0, 0.8, 0);
    robotGroup.add(headMesh);

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.3);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: robotData.color,
      emissive: robotData.color,
      emissiveIntensity: 0.2,
      shininess: 30
    });
    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bodyMesh.position.set(0, 0.2, 0);
    robotGroup.add(bodyMesh);

    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
    const armMaterial = new THREE.MeshPhongMaterial({
      color: robotData.color,
      emissive: robotData.color,
      emissiveIntensity: 0.2
    });

    // Left arm
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.3, 0.4, 0);
    leftArm.rotation.z = Math.PI / 4;
    robotGroup.add(leftArm);

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.3, 0.4, 0);
    rightArm.rotation.z = -Math.PI / 4;
    robotGroup.add(rightArm);

    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.6);
    const legMaterial = new THREE.MeshPhongMaterial({
      color: robotData.color,
      emissive: robotData.color,
      emissiveIntensity: 0.2
    });

    // Left leg
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, -0.3, 0);
    robotGroup.add(leftLeg);

    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, -0.3, 0);
    robotGroup.add(rightLeg);

    // Create role text using sprite
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      canvas.width = 256;
      canvas.height = 64;
      context.fillStyle = robotData.textColor;
      context.font = 'bold 32px Inter';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(robotData.role, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(1, 0.25, 1);
      sprite.position.set(0, -0.8, 0);
      robotGroup.add(sprite);
    }

    return robotGroup;
  };
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;
    camera.position.y = 1;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create robots with V-formation
    ROBOTS.forEach((robotData, index) => {
      const robotModel = createRobotModel(robotData);
      
      // Enhanced V-formation positioning
      const xOffset = (index - 2) * 1.3;
      const zOffset = Math.abs(index - 2) * -1.5;
      const rotation = (index - 2) * Math.PI / 6;

      robotModel.position.set(xOffset, 0, zOffset);
      robotModel.rotation.y = rotation;
      
      scene.add(robotModel);
      robotsRef.current.push(robotModel);
    });

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // Animation loop with smoother floating effect
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      requestAnimationFrame(animate);
      
      // Refined floating animation
      robotsRef.current.forEach((robot, index) => {
        robot.position.y = Math.sin(Date.now() * 0.0008 + index * 0.5) * 0.15;
      });
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // Enhanced resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height, false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-visible perspective-1000"
      style={{ transform: 'translateY(40px)' }}
    />
  );
};