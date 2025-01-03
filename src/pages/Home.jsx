import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import Planet from '../models/Planet';
import Plane from '../models/Plane';
import Space from '../models/Space';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(5);


  const adjustPlanetForScreenSize = () => {
    let screenScale = [5, 5, 5];
    let screenPosition = [-0.05, -1.25, 1];
    let rotation = [0.3, -0.4, 0];

    return [screenScale, screenPosition, rotation]
  }

  const [planetScale, planetPosition, planetRotation] = adjustPlanetForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000}}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <Plane />
            <Space isRotating={isRotating} />
            <Planet 
              position = {planetPosition}
              scale = {planetScale}
              rotation = {planetRotation}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              setCurrentStage={setCurrentStage}
            />
          </Suspense>
            
      </Canvas>

    </section>
  )
}

export default Home