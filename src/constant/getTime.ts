import dayjs from "dayjs";

export const getTime = () =>{
  const now = dayjs();
  if (now.isBefore(now.minute(59), 'minute') && now.isAfter(now.minute(58), "minute")) {
    const setDay = now.format('YYYYMMDD');
    const setTime = now.minute(30).format('HHmm');
    const searchTime = now.add(1, 'hour').minute(0).format('HHmm');
    return {day: setDay, time: setTime, searchTime: searchTime};
  } else {
    const setDay = now.subtract(1, 'hour').format('YYYYMMDD');
    const setTime = now.subtract(1, 'hour').minute(30).format('HHmm');
    const searchTime = now.minute(0).format('HHmm');
    return {day: setDay, time: setTime, searchTime: searchTime};
  }
};