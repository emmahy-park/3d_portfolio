import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);
  const planeRef = useRef();
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, [])

  useFrame(({ clock, camera }) => {
    planeRef.current.position.y = Math.sin(clock.elapsedTime) * 0.25 + 1;

    if(planeRef.current.position.x > camera.position.x + 3) {
      planeRef.current.rotation.y = Math.PI;
    } else if (planeRef.current.position.x < camera.position.x - 5) {
      planeRef.current.rotation.y = 0;
    }

    if (planeRef.current.rotation.y === 0) {
      planeRef.current.position.x += 0.03;
      planeRef.current.position.z -= 0.01;
    } else {
      planeRef.current.position.x -= 0.01;
      planeRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh position={[-8, 2, 0]} scale={[1, 1, 1]} ref={planeRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane