/*global jQuery, console */

/**
 * Assert
 * version: 0.0
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * Based on source code found here:
 * http://stackoverflow.com/questions/476679/preloading-images-with-jquery
 *
 * Synopsis:
 *     $.assert(true, false, 'This always fails!');
 */

(function ($) {
    'use strict';
    $.assert = function (expected, actual, message) {
        var condition = expected === actual;

        if (typeof message !== 'string') {
            message = '';
        }

        if (condition !== true) {
            throw new Error(message +
                            '\n\texpected: ' + expected +
                            '\n\tbut got: ' + actual);
        } else {
            return condition;
        }
    };
}(jQuery));

