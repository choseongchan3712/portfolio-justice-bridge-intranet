import axios from "axios";

const PROXY_URL = process.env.NODE_ENV === 'production' 
  ? "https://intranet-server-rjg3.onrender.com/api"  
  : "http://localhost:4000/api";

const lawApi = axios.create({
  baseURL: `${PROXY_URL}/law`,
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

export const getLawId = (id: string) =>
  lawApi.get(`/${id}`);

const searchLawApi = axios.create({
  baseURL: `${PROXY_URL}/law-search`,
  params: {
    OC: "choseongchan3712",
    type: "JSON",
    display: "100",
  },
});

export const getLaw = (query: string) =>
  searchLawApi.get("", {
    params: {
      query: query,
    },
  });

const precedentApi = axios.create({
  baseURL: `${PROXY_URL}/precedent-search`,
  params: {
    OC: "choseongchan3712",
    type: "JSON",
    org: "400201",
    display: "100",
  },
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
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

export const getPrec = (id: string) =>
  searchPrecApi.get(`/${id}`);

const interpretationApi = axios.create({
  baseURL: `${PROXY_URL}/interpretation-search`,
  params: {
    OC: "choseongchan3712",
    type: "JSON",
    display: "100",
  },
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
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

export const getInterDetail = (id: string) =>
  searchInterApi.get("", {
    params: {
      ID: `${id}`,
    },
  });
