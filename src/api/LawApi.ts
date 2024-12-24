import axios from "axios";

const lawApi = axios.create({
  baseURL: "http://www.law.go.kr/DRF/lawService.do?target=law",
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

export const getLawId = (id: string) =>
  lawApi.get("", {
    params: {
      ID: id,
    },
  });

const searchLawApi = axios.create({
  baseURL: "http://www.law.go.kr/DRF/lawSearch.do?target=law",
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
  baseURL: "http://www.law.go.kr/DRF/lawSearch.do?target=prec",
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
  baseURL: "http://www.law.go.kr/DRF/lawService.do?target=prec",
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

export const getPrec = (id: string) =>
  searchPrecApi.get("", {
    params: {
      ID: `${id}`,
    },
  });

const interpretationApi = axios.create({
  baseURL: "http://www.law.go.kr/DRF/lawSearch.do?target=expc",
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
  baseURL: "http://www.law.go.kr/DRF/lawService.do?target=expc",
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
