import Dao from "./dao.js";

class DaoUsers extends Dao{
    constructor() {
        super('users');
    }
}

export default DaoUsers