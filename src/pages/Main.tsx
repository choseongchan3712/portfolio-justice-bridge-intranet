import { useEffect, useState } from "react";
import ContentsWrap from "../components/global/ContentsWrap";
import GridWrap from "../components/global/GridWrap";
import Wraper from "../components/global/Wraper";
import NoticeContainer from "../components/main/NoticeContainer";
import RatesWrap from "../components/main/RatesWrap";
import { getweather } from "../api/weatherApi";
import { getLocation } from "../constant/getLocation";
import { getTime } from "../constant/getTime";
import { getLocationName } from "../api/locationApi";
import dayjs from "dayjs";

const Main = () => {
  const [weather, setWeather] = useState<any>();
  const [location, setLocation] = useState<any>();
  const [locationToGrid, setLocationToGrid] = useState<any>();
  const [nowTime, setNowTime] = useState<any>();
  const [locationName, setLocationName] = useState<any>();
  const [useWeather, setUseWeather] = useState<any>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude; //위도
          const longtitude = position.coords.longitude; //경도
          setLocation({ lat: latitude, long: longtitude });
        },
        (error) => {
          console.log(error);
        }
      );
    }
    const now = getTime();
    setNowTime(now);
  }, []);

  console.log(nowTime);

  useEffect(() => {
    if (location) {
      const grid = getLocation(location.lat, location.long);
      setLocationToGrid(grid);
      // (async () => {
      //   try {
      //     const locName = await getLocationName({
      //       x: location.long,
      //       y: location.lat,
      //     });
      //     setLocationName(locName?.data?.documents[0]?.region_1depth_name);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // })();
    }
  }, [location]);

  // console.log(locationName);

  useEffect(() => {
    if (locationToGrid && nowTime) {
      (async () => {
        try {
          const res = await getweather({
            nx: locationToGrid.x,
            ny: locationToGrid.y,
            base_date: nowTime.day,
            base_time: nowTime.time,
          });
          setWeather(res);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [locationToGrid, nowTime]);

  useEffect(()=>{
    if (weather) {
      const doWeather = (weather?.data?.response?.body?.items?.item)?.filter((data:any) => data.fcstTime === nowTime.searchTime);
      const temp = doWeather?.filter((data:any)=> data.category === "T1H")[0]?.fcstValue;
      const sky = doWeather?.filter((data:any)=> data.category === "SKY")[0]?.fcstValue;
      const isRain = doWeather?.filter((data:any)=> data.category === "PTY")[0]?.fcstValue;
      setUseWeather({temperature: temp, weather: sky, isRain: isRain});
    }
  }, [weather])

  console.log(useWeather);

  return (
    <Wraper>
      <GridWrap
        columns="repeat(4, 1fr)"
        rows="none"
        gap="20px"
        padding="0 0 20px 0"
        height="calc(100% - 165px)"
        areas={`"notice notice notice weather""exchange exchange exchange todo""stock stock stock todo"`}
      >
        <ContentsWrap className="notice" title="공지사항">
          <GridWrap
            columns="repeat(3, 1fr)"
            rows="none"
            gap="20px"
            padding="15px 0"
            height="auto"
            areas="'company department team'"
          >
            <NoticeContainer
              barColor="var(--point-color-y)"
              title="회사공지"
              areaName="company"
            />
            <NoticeContainer
              barColor="var(--main-color)"
              title="부서공지"
              areaName="department"
            />
            <NoticeContainer
              barColor="var(--point-color-br)"
              title="팀내공지"
              areaName="team"
            />
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="exchange" title="환율">
          <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="15px 0"
            height="auto"
            areas="'box1 box2 box3 box4'"
          >
            <RatesWrap areaName="box1" type="exchange" />
            <RatesWrap areaName="box2" type="exchange" />
            <RatesWrap areaName="box3" type="exchange" />
            <RatesWrap areaName="box4" type="exchange" />
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="stock" title="주식">
          <GridWrap
            columns="repeat(4, 1fr)"
            rows="none"
            gap="20px"
            padding="15px 0"
            height="auto"
            areas={`"box1 box2 box3 box4"`}
          >
            <RatesWrap areaName="box1" type="stock" />
            <RatesWrap areaName="box2" type="stock" />
            <RatesWrap areaName="box3" type="stock" />
            <RatesWrap areaName="box4" type="stock" />
          </GridWrap>
        </ContentsWrap>
        <ContentsWrap className="weather" title="날씨">
          <></>
        </ContentsWrap>
        <ContentsWrap className="todo" title="12월 2024">
          <></>
        </ContentsWrap>
      </GridWrap>
    </Wraper>
  );
};

export default Main;
