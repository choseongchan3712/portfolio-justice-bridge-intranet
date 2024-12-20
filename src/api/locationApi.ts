import axios from "axios";

const locationApi = axios.create({
  baseURL:"https://dapi.kakao.com/v2/local/geo/coord2regioncode.json",
  headers:{
    Authorization: 'KakaoAK a3705cf261d1edbace468acc357521c6',
  },
});

export const getLocationName = (queryParams:any) => locationApi.get('', {
  params:{
    ...queryParams,
  }
});