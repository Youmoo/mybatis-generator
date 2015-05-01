'use strict';

var React = require('react');
var Table = require('./Table');
var Panel = require('./Panel');

/**
 * 左右两个侧栏
 */
var Grid = React.createClass({
    render: function () {
        return <div className="ui grid">
            <div className="four wide column">
                <Table/>
            </div>
            <div className="twelve wide column">
                <Panel/>
            </div>
        </div>
    }
});

module.exports = Grid;