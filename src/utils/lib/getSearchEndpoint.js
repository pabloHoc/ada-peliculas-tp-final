import { getApiUrl } from "utils/lib/getApiUrl"

const getSearchEndpoint = (media, search, page = 1, searchParam = "") => {
  const endpoints = {
    trending: getApiUrl(`/trending/${media}/week`),
    genre: `${getApiUrl(`/discover/${media}`)}&with_genres=${searchParam}`,
    year: `${getApiUrl(`/discover/${media}`)}&year=${searchParam}`,
    search: `${getApiUrl(`/search/multi`)}&query=${search}`,
    category: getApiUrl(`/${media}/${search}`)
  }

  const endpoint =
    endpoints[search] ||
    (media === "multi" && endpoints.search) ||
    (searchParam && endpoints.genre) ||
    endpoints.category
  const pagedEnpoint = `${endpoint}&page=${page}`

  return pagedEnpoint
}

export { getSearchEndpoint }
