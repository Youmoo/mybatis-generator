'use strict';

/**
 * 将 a_bc_def转换为 aBcDef
 * @param sqlField
 * @returns {string}
 */
module.exports = function fieldMapping(sqlField) {
    return String(sqlField).replace(/_\w/g, function (match) {
        return match.charAt(1).toUpperCase();
    });
};