/*global jQuery, console */

/**
 * Preload Images jQuery Plugin
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
 *     $(['foo.png', 'bar.png']).preload();
 */

(function ($) {
    'use strict';
    $.fn.preload = function () {
        this.each(function () {
            $('<img/>')[0].src = this;
        });
    };
}(jQuery));

