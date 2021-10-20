const priceFormat = (price) => {
    const formattedPrice = `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    return formattedPrice
}

export { priceFormat }