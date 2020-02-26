import { URL_BASE } from "constants/api"

const getApiUrl = (endpoint, language = "en-US") =>
  `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`

export { getApiUrl }
