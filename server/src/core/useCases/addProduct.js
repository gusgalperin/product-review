import DaoProducts from "../../infra/data/mongodb/daoProducts.js";
import Product from "../entities/product.js";

class AddProduct {
    constructor() {
        this.products = new DaoProducts()
    }

    do = async ({ category, name, brand }) => {
        const product = new Product(category, brand, name)
        await this.products.add(product)
        return product
    }
}

export default AddProduct