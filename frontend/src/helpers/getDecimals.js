export const getDecimals = number => {
  const num = number.split('.').at(-1)
  return num
}
