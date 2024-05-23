import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataType} = Sequelize;

const User = db.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
},{
    freezeTableName: true,
});

export default User;

(async () => {
    await db.sync();
})();
