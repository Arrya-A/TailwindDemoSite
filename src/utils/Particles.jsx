import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [engineInitialized, setEngineInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        setEngineInitialized(true);
        console.log("tsParticles engine initialized.");
      })
      .catch((error) => {
        console.error("Failed to initialize tsParticles engine:", error);
      });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      particles: {
        color: {
          //   value: "#00c59e", // Vibrant teal for web theme
          value: "#ffffffff",
        },
        links: {
          enable: true,
          distance: 120,
          //   color: "#00c59e", // Matching teal for cohesive look
          color: "#ffffffff",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          outMode: "out",
          attract: {
            enable: false,
            rotateX: 800,
            rotateY: 1600,
          },
        },
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.2,
          },
        },
        shape: {
          type: ["circle", "triangle"], // Mix of circle and triangle for dynamic web aesthetic
        },
        size: {
          value: { min: 1, max: 6 },
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.5,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!engineInitialized) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
