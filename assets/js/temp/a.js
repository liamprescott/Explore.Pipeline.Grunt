
// ********************************************************************
// Test class A
// ********************************************************************

var classA = function () {
    'use strict';
    // Private properties
    var name = "Class A",
        type = "Custom definition : A",
        a = "a",
        b = "b",
        c = "c";

    // Create return object
    var that = {};

    // Public method definition
    var getA = function ()
    {
        return a;
    },
    getB = function ()
    {
        return b;
    },
    getC = function ()
    {
        return c;
    },
    calc = function ()
    {
        return name + " - " + a + b + c;
    };

    // Assign public methods
    that.getA = getA;
    that.getB = getB;
    that.getC = getC;
    that.calc = calc;

    return that;
};
