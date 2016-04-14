'use strict';
/**
 * tabs
 */
var TabsConfig = [
    {
        tabName: 'desc'
    },
    {
        tabName: 'resultMap',
        loadContent: require('../../../support/xml/baseResultMap')
    },
    {
        tabName: 'columns',
        loadContent: require('../../../support/xml/baseColumns')
    },
    {
        tabName: 'insert',
        loadContent: require('../../../support/xml/insert')
    },
    {
        tabName: 'insertSelective',
        loadContent: require('../../../support/xml/insertSelective')
    },
    {
        tabName: 'update',
        loadContent: require('../../../support/xml/update')
    },
    {
        tabName: 'updateSelective',
        loadContent: require('../../../support/xml/updateSelective')
    }
];
module.exports = TabsConfig;