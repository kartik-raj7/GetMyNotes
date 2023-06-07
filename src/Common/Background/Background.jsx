import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Victor from "victor";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particleSystem, particles;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      );
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.domElement);

      particles = [];

      const particleCount = 5000; // Number of particles

      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle();
        particles.push(particle);
        scene.add(particle.mesh);
      }

      animate();
    };

    const createParticle = () => {
      const particleElement = new Particle();
      particleElement.mesh.scale.set(0.1, 0.1, 0.1);
      particleElement.mesh.position.x = Math.random() * 10 - 5;
      particleElement.mesh.position.y = Math.random() * 10 - 5;
      particleElement.mesh.position.z = Math.random() * 10 - 5;
      return particleElement;
    };

    const Particle = function () {
      this.mesh = new THREE.Object3D();
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const material = new THREE.MeshBasicMaterial({
        color: 0xFFFBE675,
        transparent: true,
        opacity: 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);
      this.mesh.add(mesh);

      this.position = new Victor(
        this.mesh.position.x,
        this.mesh.position.y,
        this.mesh.position.z
      );

      this.velocity = new Victor(
        Math.random() * 0.2 - 0.1,
        Math.random() * 0.2 - 0.1,
        Math.random() * 0.2 - 0.1
      );

      this.update = function () {
        this.position.add(this.velocity);
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);

        if (
          this.position.x < -5 ||
          this.position.x > 5 ||
          this.position.y < -5 ||
          this.position.y > 5 ||
          this.position.z < -5 ||
          this.position.z > 5
        ) {
          this.position = new Victor(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
          );
        }
      };
    };

    const animate = () => {
      requestAnimationFrame(animate);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.update();
      }

      renderer.render(scene, camera);
    };

    init();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div
    ref={canvasRef}
      style={{ position: "fixed", top: "0", left: "0",zIndex:'-1', height: "100vh",
      width: "100vw",overflow:'hidden'}}
    >
      </div>
  );
};

export default Background;
