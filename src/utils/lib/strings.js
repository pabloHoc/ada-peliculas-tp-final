const capitalize = str => str[0].toUpperCase() + str.slice(1)

const capitalizeWords = str =>
  str
    .split(" ")
    .filter(word => word.trim().length)
    .map(word => capitalize(word))
    .join(" ")

export { capitalize, capitalizeWords }
