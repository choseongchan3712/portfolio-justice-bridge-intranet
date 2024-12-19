import axios from "axios";

const exchangeApi = axios.create({
  baseURL:"https://openexchangerates.org/api/latest.json?",
  params: {
    app_id: "e3c21725fb764242b576b5777e817504",
    base: "USD",
    prettyprint: "false",
    show_alternative: "false",
  },
});

export const getExchangeRates = () => exchangeApi.get('');