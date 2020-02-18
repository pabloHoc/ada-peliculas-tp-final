import { URL_BASE } from "constants/api"
import { useGet } from "./useGet"

const API_KEY = "6a93319b2d78795675b8bd9aa0965a95"

const getApiUrl = endpoint => `${URL_BASE}${endpoint}?api_key=${API_KEY}`

const useMedia = (id, media, subresource = "") =>
  useGet(getApiUrl(`/${media}/${id}${subresource ? `/${subresource}` : ""}`))

const useMediaSearch = (media, keyword, page = 1) => {
  const endpoint =
    media === "multi"
      ? `${getApiUrl(`/search/multi`)}&query=${keyword}&page=${page}`
      : `${getApiUrl(`/${media}/${keyword}`)}&page=${page}`

  return useGet(endpoint)
}

const useGetActor = id => useGet(getApiUrl(`/person/${id}`))

export { useMedia, useMediaSearch }
