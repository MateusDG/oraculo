import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const particlesOptions = {
    preset: 'stars',
    background: {
      color: {
        value: '#0c0a1a',
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
