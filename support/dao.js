'use strict';

var camelCase = require('./camelCase');
var capitalize = require('./capitalize');

/**
 * 构造实体类
 */
module.exports = function dao(tableDesc) {

    var entityName = capitalize(camelCase(tableDesc.table));
    var mapperName = entityName + 'Mapper';
    var map = {
        Mapper: mapperName,
        Entity: entityName
    };


    var results = [
        'public interface Mapper {',
        '\tList<Entity>' + ' select();',
        '\tInteger selectCount();',
        '\tInteger insert(Entity entity);',
        '\tInteger insertSelective(Entity entity);',
        '\tInteger update(Entity entity);',
        '\tInteger updateSelective(Entity entity);',
        '\tInteger delete(Entity entity);',
        '}'
    ].join('\n').replace(/Mapper|Entity/g, function (match) {
            return map[match]
        });

    return new Promise(function (res) {
        res(results);
    })
};