export const getQueryParameter = strQueries => {
  const items = strQueries.replace('?', '').split('=')
  const key = items[0]
  const value = items[1]

  const queries = {
    [key]: value,
  }
  return queries
}
