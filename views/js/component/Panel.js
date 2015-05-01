'use strict';

var React = require('react');
var Tabs = require('./Tabs');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Panel = React.createClass({
    getInitialState: function () {
        return getState();
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return <div className={this.state.table?'':'hidden'}>
            <Tabs tabIndex={this.state.tabIndex}/>

            <div className="ui bottom attached segment">
                <pre>{this.state.content}</pre>
            </div>
        </div>
    },
    /**
     * 每次数据更新后，重新从store加载state
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function () {
        this.setState(getState());
    }
});

function getState() {
    var data = AppStore.getData();
    var content = data.content;
    if (typeof content !== 'string') {
        content = JSON.stringify(content, null, 2)
    }
    return {
        table: data.table,
        content: content,
        tabIndex: data.tabIndex || 0
    }
}

module.exports = Panel;