import { v4 as uuidv4 } from 'uuid'

class Product {
    constructor(category, brand, name) {
        this.id = uuidv4();
        this.category = category
        this.brand = brand
        this.name = name
        this.active = true
    }

    static set(other){
        let p = new Product(other.category, other.brand, other.name)
        p.id = other.id
        p.active = other.active

        return p
    }

    update(name, brand, category){
        this.name = name
        this.brand = brand
        this.category = category
    }

    delete(){
        this.active = false
    }
}
export default Product