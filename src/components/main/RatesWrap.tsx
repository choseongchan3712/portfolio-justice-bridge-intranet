import styled from "styled-components";
import { RatesWrapType } from "../../type";
import { useEffect, useState } from "react";
import { getExchangeRates } from "../../api/exchangeApi";
import exchangeData from "../../constant/getExData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFlip, Autoplay } from "swiper/modules";
import { DotLoader, GridLoader } from "react-spinners";

const Container = styled.div`
  position: relative;
  background-color: var(--gary-1);
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .contents {
    height: 100%;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .money_type {
      width: 100%;
      color: var(--sub-color-b);
      font-size: var(--normal-size);
    }
    .money {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      .detail {
        color: var(--sub-color-b);
        font-weight: 900;
        font-size: var(--heading-size);
      }
      .percent {
        color: var(--sub-color-wh);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--small-size);
        font-weight: 900;
        padding: 5px;
        border-radius: 5px;
      }
    }
    .date {
      width: 100%;
      color: var(--gray-3);
      font-size: var(--small-size);
    }
  }
`;

const RatesWrap = ({ type, areaName }: RatesWrapType) => {
  const [modifyEx, setModifyEx] = useState<any>();
  const [exData, setExData] = useState<any>();
  const [USD, setUSD] = useState<number>(0);
  const [shuffledData, setShuffledData] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const res = await getExchangeRates();
        setUSD(res?.data?.rates?.KRW);
        setModifyEx(
          exchangeData.map((value: any) => ({
            symbol: value.symbol,
            amount: res?.data?.rates[value.symbol],
            name: value.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (modifyEx && USD) {
      setExData([
        {
          symbol: "USD",
          amount: USD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          name: "미국",
        },
        ...modifyEx.map((value: any) => ({
          symbol: value.symbol,
          amount: (USD / parseFloat(value.amount))
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          name: value.name,
        })),
      ]);
    }
  }, [modifyEx, USD]);

  useEffect(() => {
    if (exData) {
      const needData = exData;
      setShuffledData(
        needData
          .map((value: any) => ({ value, random: Math.random() }))
          .sort((a: any, b: any) => a.random - b.random)
          .map(({ value }: any) => value)
      );
    }
  }, [exData]);

  return type === "exchange" ? (
    shuffledData ? (
      <Container style={{ gridArea: areaName }}>
        <Swiper
          modules={[EffectFlip, Autoplay]}
          effect="flip"
          direction="vertical"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          grabCursor={true}
          className="mySwiper"
        >
          {shuffledData?.map((data: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="contents">
                <div className="money_type">
                  {data.name} {data.symbol}
                </div>
                <div className="money">
                  <div className="detail">{data.amount}</div>
                  <div
                    className="percent"
                    style={{ backgroundColor: "var(--gray-3)" }}
                  >
                    {}
                  </div>
                </div>
                <div className="date">{new Date().toLocaleDateString()}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </Container>
    ) : (
      <Container style={{ gridArea: areaName }}>
        <GridLoader color="var(--gray-3)" />
      </Container>
    )
  ) : null;
};

export default RatesWrap;
