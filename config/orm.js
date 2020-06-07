var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        let queryStr = `SELECT * FROM ${table}`;
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, col, col2, str, val, cb) {
        let queryStr = `INSERT INTO ${table} (${col}, ${col2}) VALUE ("${str}", ${val})`;
        connection.query(queryStr, function(err, res) {
        if (err) throw err;
        cb(res);
        });
    },
    updateOne: function(table, col, condition, id, cb) {
        let queryStr = `UPDATE ${table} SET ${col} = ${condition} WHERE id = ${id}`;
        connection.query(queryStr, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }

}

module.exports = orm;