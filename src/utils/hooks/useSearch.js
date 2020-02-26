import { useGet } from "utils/hooks/useGet"
import { getSearchEndpoint } from "utils/lib/getSearchEndpoint"

const useSearch = (media, search, page = 1, searchParam = "") =>
  useGet(getSearchEndpoint(media, search, page, searchParam))

export { useSearch }
