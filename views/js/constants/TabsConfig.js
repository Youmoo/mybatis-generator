'use strict';
/**
 * tabs
 */
var TabsConfig = [
    {
        tabName: 'desc'
    },
    {
        tabName: 'baseResultMap',
        loadContent: require('../../../support/xml/baseResultMap')
    },
    {
        tabName: 'baseColumns',
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