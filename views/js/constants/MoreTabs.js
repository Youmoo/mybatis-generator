'use strict';

/**
 * 更多
 */
var MoreTabs = [
    {
        tabName: 'entity',
        loadContent: require('../../../support/java/entity')
    },
    {
        tabName: 'dao',
        loadContent: require('../../../support/java/dao')
    },
    {
        tabName: 'baseAliases',
        loadContent: require('../../../support/xml/baseAliases')
    },
    {
        tabName: 'where',
        loadContent: require('../../../support/xml/where')
    },
    {
        tabName: 'converter',
        loadContent: require('../../../support/java/converter')
    },
    {
        tabName: 'controller',
        loadContent: require('../../../support/java/controller')
    },
    {
        tabName: 'selectProvider',
        loadContent: require('../../../support/sqlProvider/selectProvider')
    },
    {
        tabName: 'updateProvider',
        loadContent: require('../../../support/sqlProvider/updateProvider')
    },
    {
        tabName: 'insertProvider',
        loadContent: require('../../../support/sqlProvider/insertProvider')
    }
];

module.exports = MoreTabs;