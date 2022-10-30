export const getQueryParameter = strQueries => {
  const items = strQueries.replace('?', '').split('=')
  const [key, value] = items

  const queries = {
    [key]: value,
  }
  return queries
}
