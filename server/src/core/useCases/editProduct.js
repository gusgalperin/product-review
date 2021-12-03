import DaoProducts from "../../infra/data/mongodb/daoProducts.js";

class EditProduct {
    constructor() {
        this.dao = new DaoProducts()
    }

    do = async ({id, name, brand, category}) => {
        let p = await this.dao.getOne(id)
        p.update(name, brand, category)
        await this.dao.update(p)
    }
}

export default EditProduct