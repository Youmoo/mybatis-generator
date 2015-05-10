'use strict';

/**
 * 属性封装
 */
function Prop(name, value) {
    if (!(this instanceof Prop)) {
        return new Prop(name, value);
    }
    this.name = name;
    this.value = value;
}

Prop.prototype.toString = function () {
    return ' ' + this.name + '="' + this.value + '"'
};

module.exports = Prop;