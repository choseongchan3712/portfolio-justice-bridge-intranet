import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

// 3D 요소를 위한 별도의 컴포넌트
const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1, // -1 ~ 1 범위로 정규화
        y: -(event.clientY / window.innerHeight) * 2 + 1, // -1 ~ 1 범위로 정규화
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += mouse.y * 0.015;
      meshRef.current.rotation.y += mouse.x * 0.015;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="#A0DF92" />
    </mesh>
  );
};

// 메인 컴포넌트
const Three = () => {
  return (
    <Container>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Box /> {/* useFrame을 사용하는 컴포넌트를 Canvas 내부로 이동 */}
      </Canvas>
    </Container>
  );
};

export default Three;
