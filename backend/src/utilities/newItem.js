export const createNewItem = data => {
  const price = Math.floor(data.price)
  const decimals = data.price % 1
  return {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      amount: new Intl.NumberFormat('es-AR').format(price),
      decimals: decimals.toFixed(2),
    },
    picture: data.thumbnail,
    free_shipping: data.shipping.free_shipping,
    condition: data.condition,
  }
}