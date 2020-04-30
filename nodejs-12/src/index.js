const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"]

const getProductsById = (ids, productsList) => productsList.filter(({ id }) => ids.includes(id))

const getPromotion = (products) => {
  const categoriesObject = products.reduce((acc, product) => ((acc[product.category] = (acc[product.category] || 0) + 1), acc), {})

  const categories = Object.keys(categoriesObject)

  return promotions[categories.length - 1]
}

function getValues(products, promotion) {
  let totalPriceNoDiscount = 0
  let totalPrice = 0
  let discountValue = 0
  let discount = 0

  products.forEach((product) => {
    for (let i = 0; i < product.promotions.length; i++) {      
      if (product.promotions[i].looks.includes(promotion)) {
        totalPrice += product.promotions[i].price
        break
      } else if (typeof product.promotions[i + 1] === "undefined") {
        totalPrice += product.regularPrice
      }
    }
    totalPriceNoDiscount += product.regularPrice
  })
  discountValue = totalPriceNoDiscount - totalPrice
  discount = (discountValue / totalPriceNoDiscount) * 100

  const result = products.map(({ name, category }) => ({ name, category }))

  const data = {
    products: result,
    promotion,
    totalPrice: totalPrice.toFixed(2),
    discountValue: discountValue.toFixed(2),
    discount: discount.toFixed(2) + "%",
  }

  return data
}

function getShoppingCart(ids, productsList) {
  const productsById = getProductsById(ids, productsList)
  const promotion = getPromotion(productsById)
  const values = getValues(productsById, promotion)

  return values
}

module.exports = { getShoppingCart }