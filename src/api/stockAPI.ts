import axios from "axios";

const stockApi = axios.create({
  baseURL:"https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo",
  params: {
    serviceKey:"5gA4kTWbmz85x9VyBV47b4m03EKFEs9iJesYrFSSo8UI7fpABfxZD8hYU+z78vC98oSKPs6RGEoLXwDH0zC3FQ==",
    resultType:"json",
    mrktCls:"KOSPI",
    numOfRows: 100,
    beginTrqu: "400000",
  },
});

export const stockRates = () => stockApi.get('');