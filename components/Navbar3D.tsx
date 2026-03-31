"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Navbar3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 60, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(200, 60);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating orbs
    const orbs: THREE.Mesh[] = [];
    const colors = [0x9333ea, 0xa855f7, 0xc084fc, 0xd946ef];
    
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.SphereGeometry(0.2, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        emissive: 0x4c1d95,
        emissiveIntensity: 0.3,
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.x = (Math.random() - 0.5) * 2;
      orb.position.y = (Math.random() - 0.5) * 1.5;
      orb.position.z = (Math.random() - 0.5) * 2;
      scene.add(orb);
      orbs.push(orb);
    }

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 3;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      orbs.forEach((orb, i) => {
        orb.position.y += Math.sin(time + i) * 0.005;
        orb.rotation.x += 0.02;
        orb.rotation.y += 0.03;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute -top-2 -right-2 opacity-30 pointer-events-none" />;
}