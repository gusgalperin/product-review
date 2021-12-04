import ProductSummary from "../entities/productSummary.js";
import DaoProducts from "../../infra/data/mongodb/daoProducts.js";
import DaoProductReviews from "../../infra/data/mongodb/daoProductReviews.js";

class GetTopProductsList {
    constructor() {
        this.products = new DaoProducts()
        this.reviews = new DaoProductReviews()
    }

    do = async () => {
        const summary = (await this.getSummary())
            .filter(s => s.stars > 0)
            .sort((a, b) => b.stars - a.stars)
            .slice(0, 5)
            .map((s) => { return { name: s.name, brand:s.brand, stars: s.stars } })

        let result = []

        for (let i = 0; i < summary.length; i++) {
            let item = {}
            item[`${summary[i].name} - ${summary[i].brand}`] = summary[i].stars
            result.push(item)
        }

        return result
    }

    getSummary = async () => {
        const products = await this.products.getAll()
        const reviews = await this.reviews.getAll()
        const summary = []

        products.forEach((product) => {
            const pReviews = reviews.filter(r => r.productId == product.id)

            summary.push(new ProductSummary(product, pReviews))
        })

        return summary
    }
}


export default GetTopProductsList