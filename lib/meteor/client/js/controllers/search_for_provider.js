Template.search_for_provider.created = function () {
    setTitle('Search');
};

Template.search_for_provider.rendered = function () {

    $('.search-for-provider li li').click(function() {
        Session.set('searchQuery', $(this).text());
        Meteor.Router.to('/grid');
        window.scrollTo(0, 0);
    });
};
