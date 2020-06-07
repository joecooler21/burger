var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
var orm = require("../config/orm.js");

router.get('/', function (req, res) {
    burger.selectAll(data=> {
        var obj = {
            burgers: data
            
        }
        console.log(obj);
        res.render("index", obj);
    });
    
});

router.get('/api/all', function(req, res) {
    burger.selectAll(data => {
        res.send(data);
    });
});

router.post('/api/add', function(req, res) {
    burger.insertOne(req.body.name, 0, data=>{
        res.send(data);
    });
});

router.post('/api/update', function(req, res) {
    burger.updateOne(req.body.id, 1, data=> {
        res.send(data);
    });
});

module.exports = router;
