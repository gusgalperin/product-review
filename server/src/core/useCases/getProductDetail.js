import DaoProducts from "../../infra/data/mongodb/daoProducts.js";
import DaoProductReviews from "../../infra/data/mongodb/daoProductReviews.js";
import DaoUsers from "../../infra/data/mongodb/daoUsers.js";
import ProductSummary from "../entities/productSummary.js";

class GetProductDetail {
    constructor() {
        this.products = new DaoProducts()
        this.reviews = new DaoProductReviews()
        this.users = new DaoUsers()
    }

    do = async ({id}) => {
        const product = await this.products.getOne(id)
        const reviews = await this.reviews.getByProduct(id)
        const users = await this.users.getAll()

        return new ProductSummary(product, reviews, users)
    }
}

export default GetProductDetail