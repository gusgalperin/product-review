import { v4 as uuidv4 } from 'uuid'

class Product {
    constructor(category, brand, name) {
        this.id = uuidv4();
        this.category = category
        this.brand = brand
        this.name = name
    }
}
export default Product