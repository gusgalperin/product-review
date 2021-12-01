import DaoUsers from "../../infra/data/mongodb/daoUsers.js";
import User from "../entities/user.js";

class AddUser {

    constructor() {
        this.users = new DaoUsers()
    }

    do = async ({name}) => {
        const user = new User(name)
        await this.users.add(user)
        return user
    }
}

export default AddUser