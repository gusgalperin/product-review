import DaoProducts from "../../infra/data/mongodb/daoProducts.js";
import DaoUsers from "../../infra/data/mongodb/daoUsers.js";
import DaoProductReviews from "../../infra/data/mongodb/daoProductReviews.js";
import ProductReview from "../entities/productReview.js";

class AddReview {
    constructor() {
        this.products = new DaoProducts()
        this.users = new DaoUsers()
        this.productReviews = new DaoProductReviews()
    }

    do = async ({userId, productId, purchaseDate, price, stars, comment}) => {
        const user = await this.users.getOne(userId)
        const product = await this.products.getOne(productId)

        const review = new ProductReview(user.id, product.id, purchaseDate, price, stars, comment)
        await this.productReviews.add(review)

        return review
    }
}

export default AddReview