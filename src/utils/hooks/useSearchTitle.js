import { CATEGORY, MEDIA } from "constants/i18n"
import { capitalizeWords } from "utils/lib/strings"

const MEDIAS = ["tv", "movie", "person"]

export const useSearchTitle = (search, media) => {
  if (MEDIAS.includes(media)) {
    return "Género: " + capitalizeWords(media)
  }

  if (search === "trending") {
    return `${MEDIA[media]} que son tendencia`
  }

  if (!!media || !MEDIA[media]) {
    return "Resultados para: " + capitalizeWords(search)
  }

  const parsedTitle = `${MEDIA[media]} ${CATEGORY[search]}`
  return parsedTitle
}
