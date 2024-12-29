import axios from "axios";

const PROXY_URL = process.env.NODE_ENV === 'production' 
  ? "https://intranet-server-rjg3.onrender.com/api"  
  : "http://localhost:4000/api";

const lawApi = axios.create({
  baseURL: `${PROXY_URL}/law`,
});

export const getLawId = (id: string) =>
  lawApi.get(`/${id}`);

const searchLawApi = axios.create({
  baseURL: `${PROXY_URL}/law-search`,
});

export const getLaw = (query: string) =>
  searchLawApi.get("", {
    params: {
      query: query,
    },
  });

const precedentApi = axios.create({
  baseURL: `${PROXY_URL}/precedent-search`,
});

export const getPrecedent = (page: string) =>
  precedentApi.get("", {
    params: {
      page: page,
    },
  });

export const getSearchprec = (query: string) =>
  precedentApi.get("", {
    params: {
      query: query,
    },
  });

const searchPrecApi = axios.create({
  baseURL: `${PROXY_URL}/precedent`,
});

export const getPrec = (id: string) =>
  searchPrecApi.get(`/${id}`);

const interpretationApi = axios.create({
  baseURL: `${PROXY_URL}/interpretation-search`,
});

export const getInter = (page: string) =>
  interpretationApi.get("", {
    params: {
      page: page,
    },
  });

export const getInterprec = (query: string) =>
  interpretationApi.get("", {
    params: {
      query: query,
    },
  });

const searchInterApi = axios.create({
  baseURL: `${PROXY_URL}/interpretation`,
});

export const getInterDetail = (id: string) =>
  searchInterApi.get(`/${id}`);
