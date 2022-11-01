export const getDecimals = number => {
  if (number < 0.1) return
  const cutDecimals = number.toFixed(2)
  const num = Number(cutDecimals.split('.').at(-1))
  return num
}
