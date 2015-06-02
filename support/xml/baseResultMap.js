'use strict';

var Tag = require('./../tag/Tag');


module.exports = function baseResultMap(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return new Tag('result')
            .addProp('column', row.field)
            .addProp('property', row.javaField);
    });

    var tag = new Tag("resultMap")
        .addProp("id", "baseResultMap")
        .addProp("type", "your.entity.Type")
        .addChildren(results);

    return new Promise(function (res) {
        res(''+tag);
    })

};