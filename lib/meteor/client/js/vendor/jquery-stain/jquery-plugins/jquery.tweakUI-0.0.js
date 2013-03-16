/*global jQuery, console, setTimeout */

/**
 * Tweak the User Interface (jQuery Plugin)
 * version: 0.0
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *
 * Requires jQuery UI.
 *
 * See http://stackoverflow.com/questions/1771627
 *
 * Synopsis:
 *
 *     $.tweak('img'); // make all IMG elements draggable
 *     $.tweak('*');   // DRAG ALL THE THINGS!!!
 */

(function ($) {
    'use strict';
    $.tweak = function (el) {
        $(el).each(function (index, element) {
            element.title += element.className;
        });

        $(el).draggable({
            start: function (event, ui) {
                ui.helper.bind("click.prevent", function (event) {
                    event.preventDefault();
                });
            },
            stop: function (event, ui) {
                setTimeout(function () {
                    ui.helper.unbind("click.prevent");
                }, 300);
            }
        });
        /* $(el).addClass('stain'); */
    };
}(jQuery));
