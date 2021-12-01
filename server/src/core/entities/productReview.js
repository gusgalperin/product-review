import { v4 as uuidv4 } from 'uuid'

class ProductReview{
    constructor(userId, productId, purchaseDate, price, stars, comment) {
        this.id = uuidv4()
        this.userId = userId
        this.productId = productId
        this.purchaseDate = purchaseDate
        this.price = price
        this.stars = stars
        this.comment = comment
    }
}

export default ProductReview