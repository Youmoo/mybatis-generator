'use strict';


module.exports = function baseResultMap(tableDesc) {
    var results = tableDesc.rows.map(function (row) {
        return ['\t<result column="', row.field, '" property="', row.javaField, '"/>'].join('');
    });
    var content = ['<resultMap id="baseResultMap" type="your.entity.Type">\n', results.join('\n'), "\n</resultMap>"].join('');

    return new Promise(function (res) {
        res(content);
    })

};