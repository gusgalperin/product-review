import Dao from "./dao.js";

class DaoProductReviews extends Dao {
    constructor() {
        super('productReviews');
    }

    getByProduct = async (productId) => {
        const query = { productId: productId }

        return await this.collection.find(query).toArray()
    }
}

export default DaoProductReviews