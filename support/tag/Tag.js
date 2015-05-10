'use strict';
var Prop = require('./Prop');

/**
 * 标签封装
 */
function Tag(name, tab) {
    this.name = name;
    this.props = [];
    this.children = [];
    this.tab = tab || 0;
}

var proto = Tag.prototype;

proto.addProp = function (name, value) {
    this.props.push(new Prop(name, value));
    return this;
};

proto.addChild = function (child) {
    if (child instanceof Tag) {
        child.tab = this.tab + 1;
    }
    this.children.push(child);
    return this;
};

proto.addChildren = function (children) {
    children.forEach(this.addChild.bind(this));
    return this;
};

proto.toString = function () {
    var tab = this.tab;
    return [
        '<',
        this.name,
        this.props.reduce(function (p, v) {
            return p + v;
        }, ''),
        this.children.length ? '>' : '',
        this.children.reduce(function (p, v) {
            return p + '\n' + tabs(tab + 1) + v;
        }, ''),
        this._closeTag()
    ].join('')
};

proto._closeTag = function () {
    if (this.children.length) {
        return '\n' + tabs(this.tab) + '</' + this.name + '>'
    }
    return '/>'
};

proto.toJSON = function () {
    return this.toString();
};

function tabs(num) {
    return num ? '\t'.repeat(num) : '';
}
module.exports = Tag;