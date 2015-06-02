'use strict';

var React = require('react');
var Grid = require('./component/Grid');
var Menu = require('./component/Menu');
var selectText = require('../../support/xml/selectText');

/**
 * 主文件
 */
React.render(<div><Menu/><Grid/></div>, document.querySelector('#main'));

//双击选中文本
$(document).on('dblclick', 'pre', function (e) {
    selectText(this);
});