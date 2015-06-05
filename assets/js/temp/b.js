

// ********************************************************************
// Test class B
// ********************************************************************

var classB = function () {
    'use strict';
    // Private Properties
    var name = "Class B",
        type = "Custom definition : B";

    // Create a return object
    var that = {};

    // Define public (priviliged) methods
    var getName = function ()
    {
        return name;
    },
    setName = function (newName)
    {
        name = newName;
    },
    getType = function ()
    {
        return type;
    };

    // Assign public methods
    that.getName = getName;
    that.setName = setName;
    that.getType = getType;

    // Return object
    return that;

};
