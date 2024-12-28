import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styled from "styled-components";
import { ThemeContext } from "./components/global/context/ThemeContext";

const Container = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
  canvas {
    pointer-events: auto;
  }
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

const RotatingShape = ({ geometry, position, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1, // -1 ~ 1 범위로 정규화
        y: -(event.clientY / window.innerHeight) * 2 + 1, // -1 ~ 1 범위로 정규화
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += mouse.y * 0.015;
      meshRef.current.rotation.y += mouse.x * 0.015;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// 메인 컴포넌트
const Three = () => {
  const { themeMode } = useContext(ThemeContext)!;
  return (
    <Container>
      {themeMode === "edge" ? (
        <Canvas style={{ width: "100%", height: "100%" }}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Box /> {/* useFrame을 사용하는 컴포넌트를 Canvas 내부로 이동 */}
        </Canvas>
      ) : themeMode === "dreamy" ? (
        <Canvas>
          <ambientLight />
          <pointLight position={[5, 5, 5]} />

          <RotatingShape
            geometry={<boxGeometry args={[2, 2, 2]} />}
            position={[-4, 0, 0]}
            color="#572CA1"
          />
          <RotatingShape
            geometry={<coneGeometry args={[1.5, 3, 32]} />}
            position={[0, 2, -4]}
            color="#572CA1"
          />
          <RotatingShape
            geometry={<cylinderGeometry args={[1, 1, 3, 32]} />}
            position={[4, -1, 2]}
            color="#572CA1"
          />
          <RotatingShape
            geometry={<dodecahedronGeometry args={[1.5]} />}
            position={[0, -2, -5]}
            color="#572CA1"
          />
        </Canvas>
      ) : null}
    </Container>
  );
};

export default Three;
