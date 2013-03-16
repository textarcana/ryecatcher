/**
 * URL Routing Table
 * See https://pinboard.in/u:noahsussman/t:meteor+routes
 *
 * Associate a URL path with a template to render.
 *
 * Order is important here!  Rules that are more specific should be
 * placed lower down the list, with the '*' route at the bottom.
 */
Meteor.Router.add({
    '': 'welcome',
    '/educator/welcome' : 'educator_landing_page',
    '/profile' : 'create_profile',
    '/profile/create/educator' : 'create_profile_educator',
    '/profile/create' : 'create_profile',
    '/profile/create/disabilities' : 'create_profile_student_disabilities',
    '/circle' : 'circle',
    '/build/circle/preview' : 'circle_preview',
    '/build/circle' : 'circle_builder',
    '/search' : 'search_for_provider',
    '/grid' : 'search_providers_grid',
    '/map': 'map_view',

    /* admin-only pages: */
    '/browse/providers' : 'browse_providers',
    '/browse/screens' : 'home',

    /* workaround for serving static files. bleh. */
    '/version.txt': function() {document.location = document.location.origin + '/version.txt';},
    '/health.txt': function() {document.location = document.location.origin + '/version.txt';},

    /* 404 for nonexistent routes (TODO: actually return a 404) */
    '*': 'not_found'
});
