import axios from "axios";

const weatherApi = axios.create({
  baseURL:"https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst",
  params: {
    serviceKey:"5gA4kTWbmz85x9VyBV47b4m03EKFEs9iJesYrFSSo8UI7fpABfxZD8hYU+z78vC98oSKPs6RGEoLXwDH0zC3FQ==",
    dataType:"JSON",
    pageNo: "1",
    numOfRows: "1000",
  },
});

export const getweather = (queryParams:any) => weatherApi.get('', {
  params:{
    ...queryParams,
  },
});