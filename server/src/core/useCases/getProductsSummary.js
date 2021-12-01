import DaoProducts from "../../infra/data/mongodb/daoProducts.js";
import DaoProductReviews from "../../infra/data/mongodb/daoProductReviews.js";
import ProductSummary from "../entities/productSummary.js";

class GetProductsSummary {
    constructor() {
        this.products = new DaoProducts()
        this.reviews = new DaoProductReviews()
    }

    do = async () => {
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

export default GetProductsSummary