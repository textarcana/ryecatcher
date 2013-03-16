/*global jQuery, console */

/**
 * Get public methods of an object (jQuery plugin).
 * version: 0.0
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * Returns an array of top-level methods that are not inherited from a
 * prototype.
 *
 * Synopsis:
 *     $.getPublicMethods(myObject);
 */

(function ($) {
    'use strict';

    $.getPublicMethods = function(o) {
        var name,
            methods = [];

        for (name in o) {
            if (o.hasOwnProperty(name)) {
                methods.push(name);
            }
        }

        return methods.sort();
    }
}(jQuery));

