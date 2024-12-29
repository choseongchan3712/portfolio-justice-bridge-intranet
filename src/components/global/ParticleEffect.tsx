import styled from "styled-components";
import Particles from "react-tsparticles"; // tsParticles의 React 래퍼 컴포넌트
import { loadFull } from "tsparticles"; // tsParticles의 전체 기능을 로드하는 함수
// 파티클 효과를 담을 컨테이너 스타일링
const ParticleContainer = styled.div`
  position: fixed; // 화면에 고정
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // 다른 요소들과의 레이어 순서
  pointer-events: none; // 마우스 이벤트가 뒤의 요소들에 전달되도록 함
  #tsparticles {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const ParticleEffect = () => {
  // tsParticles 엔진 초기화 함수
  const particlesInit = async (engine: any) => {
    try {
      await loadFull(engine);
      console.log("Particles initialized successfully");
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };
  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          // 배경 설정
          background: {
            color: {
              value: "transparent", // 배경을 투명하게 설정
            },
          },
          // 파티클 관련 설정
          particles: {
            number: {
              value: 0, // 초기 파티클 수를 0으로 설정 (마우스 움직임으로만 생성)
            },
            color: {
              value: "#572CA1", // 파티클 색상 (dreamy 테마 색상)
            },
            shape: {
              type: "circle", // 파티클 모양을 원형으로 설정
            },
            opacity: {
              value: { min: 0.3, max: 0.8 }, // 파티클의 투명도 범위
              animation: {
                enable: true, // 투명도 애니메이션 활성화
                speed: 1, // 투명도 변화 속도
                sync: false, // 각 파티클이 독립적으로 애니메이션
                minimumValue: 0 // 최소 투명도 값
              }
            },
            size: {
              value: { min: 1, max: 3 }, // 파티클 크기 범위 (픽셀)
              animation: {
                enable: true, // 크기 애니메이션 활성화
                speed: 2, // 크기 변화 속도
                minimumValue: 0.1, // 최소 크기
                sync: false // 각 파티클이 독립적으로 애니메이션
              }
            },
            move: {
              enable: true, // 파티클 움직임 활성화
              speed: 3, // 이동 속도
              direction: "none", // 무작위 방향으로 이동
              random: true, // 랜덤한 움직임
              straight: false, // 직선이 아닌 자연스러운 움직임
              outModes: {
                default: "out" // 화면 밖으로 나가면 파티클 제거
              },
              trail: {
                enable: false // 기본 trail 효과 비활성화
              }
            }
          },
          // 마우스 인터랙션 설정
          interactivity: {
            events: {
              onHover: {
                enable: true, // 마우스 호버 이벤트 활성화
                mode: "trail" // 마우스를 따라다니는 trail 효과 사용
              },
              resize: true // 화면 크기 변경 시 자동 조정
            },
            modes: {
              trail: {
                delay: 0.01, // 파티클 생성 간격 (초)
                quantity: 3, // 한 번에 생성되는 파티클 수
                particles: {
                  size: {
                    value: { min: 1, max: 3 } // trail 파티클의 크기 범위
                  },
                  move: {
                    speed: 2, // trail 파티클의 이동 속도
                    distance: 10, // 마우스로부터의 최대 이동 거리
                    outModes: {
                      default: "destroy" // 일정 시간 후 파티클 제거
                    }
                  },
                  life: {
                    duration: {
                      value: 1 // 파티클 생존 시간 (초)
                    }
                  }
                }
              }
            }
          },
          detectRetina: true // 레티나 디스플레이 지원
        }}
      />
    </ParticleContainer>
  );
};
export default ParticleEffect;