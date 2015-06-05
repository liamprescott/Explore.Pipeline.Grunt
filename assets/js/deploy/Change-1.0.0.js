/*! Change - v1.0.0 - 2015-03-20 */'use strict';

// ********************************************************************
// Test class A
// ********************************************************************

var classA = function () {

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


'use strict';

// ********************************************************************
// Test class B
// ********************************************************************

var classB = function ()
{
    // Private Properties
    var name = "Class B",
        type = "Custom definition : B";

    // Create a return object
    var that = {};

    // Define public (priviliged) methods
    var getName = function ()
    {
        return name;
    }

    var setName = function (newName)
    {
        name = newName;
    }

    var getType = function ()
    {
        return type;
    }

    // Assign public methods
    that.getName = getName;
    that.setName = setName;
    that.getType = getType;

    // Return object
    return that;

}
