import { useGet } from "utils/hooks/useGet"
import { getApiUrl } from "utils/lib/getApiUrl"

const useMedia = (id, media, subresource = "", language) =>
  useGet(
    getApiUrl(`/${media}/${id}${subresource ? `/${subresource}` : ""}`, language)
  )

export { useMedia }
