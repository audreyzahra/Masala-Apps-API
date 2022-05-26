const Sequelize = require("sequelize");
const db = require("../config/db");

const Summarize = db.define(
    "summarize",
    {
        userID: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
        username: {type: Sequelize.STRING, allowNull: false},
        caption: {type: Sequelize.STRING, allowNull: false},
        location: {type: Sequelize.STRING, allowNull: false},
        summarize: {type: Sequelize.STRING, allowNull: false},
        typeSummarize: {type: Sequelize.STRING, allowNull: false},
        category: {type: Sequelize.STRING, allowNull: true},
        createdDate: {type: Sequelize.DATE, allowNull: false},
        // createdBy: {type: Sequelize.STRING, allowNull: false},
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Summarize;