"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Contact3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i+1] = (Math.random() - 0.5) * 10;
      posArray[i+2] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x9333ea,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Rotating ring
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.05, 64, 200);
    const ringMaterial = new THREE.MeshStandardMaterial({ color: 0x9333ea, emissive: 0x4c1d95 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    // Second ring
    const ring2Geometry = new THREE.TorusGeometry(2, 0.03, 64, 200);
    const ring2Material = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x6b21a5 });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    scene.add(ring2);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 5;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;
      
      particlesMesh.rotation.y = time * 0.1;
      particlesMesh.rotation.x = time * 0.05;
      
      ring.rotation.x = time;
      ring.rotation.y = time * 0.5;
      ring2.rotation.x = time * 0.8;
      ring2.rotation.y = time * 0.3;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-5 opacity-40 pointer-events-none" />;
}