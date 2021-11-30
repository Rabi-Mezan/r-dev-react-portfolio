import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from '../Config/Particle-config';

const ParticlesBackground = () => {
    return (
        <div>
            <Particles params={particleConfig}></Particles>
        </div>
    );
};

export default ParticlesBackground;