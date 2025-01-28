import Test from "./Test";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function TestWrapper() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Test />
      <OrbitControls />
    </Canvas>
  );
}
