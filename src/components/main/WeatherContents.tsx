import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { getTime } from "../../constant/getTime";
import { getLocation } from "../../constant/getLocation";
import { getweather } from "../../api/weatherApi";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { getLocationName } from "../../api/locationApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCloud,
  faCloudRain,
  faCloudSun,
  faSnowflake,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { GridLoader } from "react-spinners";

dayjs.locale("ko");

const Container = styled.div`
  padding: 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--sub-color-wh);
  .weather_wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    .weather_contents {
      display: flex;
      align-items: center;
      svg {
        font-size: var(--weather-icon);
        margin-right: 15px;
      }
      .detail {
        font-size: var(--top-size);
        font-weight: 900;
      }
    }
    .temp {
      font-size: var(--big-size);
      font-weight: 900;
    }
  }
  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    color: var(--sub-color-wh);
    .time_wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .time {
        font-size: var(--time-size);
        font-weight: 900;
        padding-bottom: 10px;
        letter-spacing: 0;
      }
      .date_wrap {
        display: flex;
        font-size: var(--title-size);
        letter-spacing: 0;
        .week {
          padding-right: 10px;
        }
        .date {
          letter-spacing: 0.5px;
        }
      }
    }
    .location {
      font-size: var(--title-size);
    }
  }
`;

const WeatherContents = () => {
  const [weather, setWeather] = useState<any>();
  const [location, setLocation] = useState<any>();
  const [locationToGrid, setLocationToGrid] = useState<any>();
  const [nowTime, setNowTime] = useState<any>();
  const [locationName, setLocationName] = useState<any>();
  const [useWeather, setUseWeather] = useState<any>();
  const [minute, setMinute] = useState<string>();
  const [week, setWeek] = useState<string>();
  const [date, setDate] = useState<string>();

  const updateTime = useCallback(() => {
    const now = dayjs();
    setMinute(now.format("HH:mm"));
    setWeek(now.format("dddd"));
    setDate(now.format("MM.DD"));
  }, []);

  // useEffect(() => {
  //   updateTime();
  //   const interval = setInterval(() => {
  //     updateTime();
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, [updateTime]); //! updateTime이 변경될 때만 useEffect가 실행

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = position.coords.latitude; //위도
  //         const longtitude = position.coords.longitude; //경도
  //         setLocation({ lat: latitude, long: longtitude });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  //   const now = getTime();
  //   setNowTime(now);
  // }, []);

  // useEffect(() => {
  //   if (location) {
  //     const grid = getLocation(location.lat, location.long);
  //     setLocationToGrid(grid);
  //     (async () => {
  //       try {
  //         const locName = await getLocationName({
  //           x: location.long,
  //           y: location.lat,
  //         });
  //         setLocationName(locName?.data?.documents[0]?.region_1depth_name);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }
  // }, [location]);

  // useEffect(() => {
  //   if (locationToGrid && nowTime) {
  //     (async () => {
  //       try {
  //         const res = await getweather({
  //           nx: locationToGrid.x,
  //           ny: locationToGrid.y,
  //           base_date: nowTime.day,
  //           base_time: nowTime.time,
  //         });
  //         setWeather(res);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }
  // }, [locationToGrid, nowTime]);

  const updateDoWeather = useCallback(() => {
    if (weather) {
      const doWeather = weather?.data?.response?.body?.items?.item?.filter(
        (data: any) => data.fcstTime === nowTime.searchTime
      );
      const temp = doWeather?.filter((data: any) => data.category === "T1H")[0]
        ?.fcstValue;
      const sky = doWeather?.filter((data: any) => data.category === "SKY")[0]
        ?.fcstValue;
      const isRain = doWeather?.filter(
        (data: any) => data.category === "PTY"
      )[0]?.fcstValue;
      setUseWeather({ temperature: temp, weather: sky, isRain: isRain });
    }
  }, [weather]);

  useEffect(() => {
    updateDoWeather();
  }, [updateDoWeather]);

  return weather ? (
    <Container
      className="weather"
      style={{
        background:
          useWeather?.isRain === "0"
            ? useWeather?.weather === "1"
              ? "linear-gradient(33deg,var(--sunny-dark) 20%,var(--sunny-light) 97%)"
              : useWeather?.weather === "3"
              ? "linear-gradient(33deg,var(--cloud-dark) 20%,var(--cloud-light) 97%)"
              : useWeather?.weather === "4"
              ? "linear-gradient(33deg,var(--cloud-dark) 20%,var(--cloud-light) 97%)"
              : "var(--gray-3)"
            : useWeather?.isRain === "1" ||
              useWeather?.isRain === "2" ||
              useWeather?.isRain === "5" ||
              useWeather?.isRain === "4"
            ? "linear-gradient(33deg,var(--rain-dark) 20%,var(--rain-light) 60%)"
            : useWeather?.isRain === "3" ||
              useWeather?.isRain === "6" ||
              useWeather?.isRain === "7"
            ? "linear-gradient(33deg,var(--snow-dark) 20%,var(--snow-light) 97%)"
            : "var(--gray-3)",
      }}
    >
      <div className="weather_wrap">
        <div className="weather_contents">
          {useWeather?.isRain === "0" ? (
            useWeather?.weather === "1" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : useWeather?.weather === "3" ? (
              <FontAwesomeIcon icon={faCloudSun} />
            ) : useWeather?.weather === "4" ? (
              <FontAwesomeIcon icon={faCloud} />
            ) : (
              <FontAwesomeIcon icon={faSpinner} />
            )
          ) : useWeather?.isRain === "1" ||
            useWeather?.isRain === "2" ||
            useWeather?.isRain === "5" ||
            useWeather?.isRain === "4" ? (
            <FontAwesomeIcon icon={faCloudRain} />
          ) : useWeather?.isRain === "3" ||
            useWeather?.isRain === "6" ||
            useWeather?.isRain === "7" ? (
            <FontAwesomeIcon icon={faSnowflake} />
          ) : (
            <FontAwesomeIcon icon={faSpinner} />
          )}
          {useWeather?.isRain === "0" ? (
            useWeather?.weather === "1" ? (
              <div className="detail">맑음</div>
            ) : useWeather?.weather === "3" ? (
              <div className="detail">구름 많음</div>
            ) : useWeather?.weather === "4" ? (
              <div className="detail">흐림</div>
            ) : (
              <div className="detail">Loading...</div>
            )
          ) : useWeather?.isRain === "1" ||
            useWeather?.isRain === "2" ||
            useWeather?.isRain === "5" ||
            useWeather?.isRain === "4" ? (
            <div className="detail">비</div>
          ) : useWeather?.isRain === "3" ||
            useWeather?.isRain === "6" ||
            useWeather?.isRain === "7" ? (
            <div className="detail">눈</div>
          ) : (
            <div className="detail">Loading...</div>
          )}
        </div>
        <div className="temp">{useWeather?.temperature}°</div>
      </div>
      <div className="info">
        <div className="time_wrap">
          <div className="time">{minute}</div>
          <div className="date_wrap">
            <div className="week">{week}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="location">{locationName}</div>
      </div>
    </Container>
  ) : (
    <Container
      style={{
        backgroundColor: "var(--gray-3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GridLoader color="var(--sub-color-wh)" />
    </Container>
  );
};

export default WeatherContents;
