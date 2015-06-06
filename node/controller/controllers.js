'use strict';

/**
 * 所有controller的配置
 */
module.exports = {
    '/:table/desc': require("./DescController"),
    '/tables': require('./ShowTablesController')
};