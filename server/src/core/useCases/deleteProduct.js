import DaoProducts from "../../infra/data/mongodb/daoProducts.js";

class DeleteProduct{
    constructor() {
        this.daoProducts = new DaoProducts()
    }

    do = async (id) => {
        const p = await this.daoProducts.getOne(id)
        p.delete()

        await  this.daoProducts.update(p)
    }
}

export default DeleteProduct