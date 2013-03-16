/**
 * Make it safe to reference console.log() and friends, even if the
 * the console object is not natively supported.
 */

if (typeof window.console !== 'undefined' && window.console) {

    /* For browsers that don't support all of Firebug's log
     * methods, fall back to plain old console.log()
     */
    if (typeof console.debug === 'undefined') {
        console.debug = console.log;
    }

} else {
    window.console = {
        debug: function () {},
        error: function () {},
        info: function () {},
        log: function () {},
        warn: function () {}
    };
}
