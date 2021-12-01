import Dao from "./dao.js";

class DaoProducts extends Dao{
    constructor() {
        super('products');
    }
}

export default DaoProducts