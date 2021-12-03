class ProductSummary {
    constructor(product, reviews, users) {
        this.id = product.id
        this.category = product.category
        this.name = product.name
        this.brand = product.brand
        this.active = product.active
        this.stars = 0

        if(reviews){
            const starsSum = reviews
                .map(r => {
                    return r.stars
                })
                .reduce((a, b) => a + b, 0)

            this.stars = starsSum / reviews.length
            this.ratesCount = reviews.length

            for (let i = 0; i < reviews.length; i++) {
                reviews[i].userName = users.filter(u => u.id == reviews[i].userId)[0].name
            }

            this.reviews = reviews
        }
    }
}

export default ProductSummary