'use strict';

var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var TabsConfig = require('../constants/TabsConfig');
var MoreTabs = require('../constants/MoreTabs');

var Tabs = React.createClass({
    render: function () {
        return <div className="ui top attached tabular menu">
            {this._buildTabs(0, TabsConfig)}
            <div className="ui right dropdown active visible item">
                More
                <i className="dropdown icon"></i>

                <div className="menu transition visible">
                    {this._buildTabs(TabsConfig.length, MoreTabs)}
                </div>
            </div>
        </div>
    },
    _buildTabs: function (startIndex, tabs) {
        var activeIndex = this.props.tabIndex;
        return tabs.map(function (tab, idx) {
            idx = startIndex + idx;
            return <a className={activeIndex===idx?'active item':'item'} key={idx}
                      onClick={this._onClick.bind(null,idx,tab.tabName)}>{tab.tabName}</a>
        }, this)
    },
    _onClick: function (idx, tabName) {
        AppActions.clickTab(idx, tabName);
    }
});

module.exports = Tabs;