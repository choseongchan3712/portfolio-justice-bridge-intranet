import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleEffect = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine); // tsparticles의 전체 기능 로드
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000", // 배경색
          },
        },
        particles: {
          number: {
            value: 100, // 파티클 수
          },
          color: {
            value: "#ffffff", // 파티클 색상
          },
          shape: {
            type: "circle", // 파티클 모양
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3, // 파티클 크기
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce", // 화면 경계에서 튕김
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail", // 마우스가 지나가면 파티클 생성
            },
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 5, // 마우스를 따라다니는 파티클 개수
            },
          },
        },
      }}
    />
  );
};

export default ParticleEffect;
