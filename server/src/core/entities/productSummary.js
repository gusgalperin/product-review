const starsWeight= {
    5: 252,
    4: 124,
    3: 40,
    2: 33,
    1: 29
}

const starsWeightSum = Number(starsWeight["5"])+Number(starsWeight["4"])+Number(starsWeight["3"])+Number(starsWeight["2"])+Number(starsWeight["1"])

class ProductSummary {
    constructor(product, reviews, users) {
        this.id = product.id
        this.category = product.category
        this.name = product.name
        this.brand = product.brand
        this.active = product.active
        this.stars = 0

        if(reviews){
            this.stars = this.calculateStars(reviews)
            this.ratesCount = reviews.length

            if(users){
                for (let i = 0; i < reviews.length; i++) {
                    reviews[i].userName = users.filter(u => u.id == reviews[i].userId)[0].name
                }
            }

            this.reviews = reviews
        }
    }

    calculateStars = (reviews) => {
        const starsCount = this.countStars(reviews)

        let addition = 0

        for (let i = 1; i <= 5 ; i++) {
            addition += starsCount[i]*starsWeight[i]
        }

        const stars = addition / starsWeightSum

        return Math.round(stars * 100) / 100
    }

    countStars = (reviews) => {
        let stars = {
            1:0,
            2:0,
            3:0,
            4:0,
            5:0
        }

        for (let i = 0; i < reviews.length; i++) {
            stars[reviews[i].stars]++
        }

        return stars
    }
}

export default ProductSummary