Template.educator_landing_page.created = function () {
    setTitle('Educator welcome!');
};

Template.educator_landing_page.rendered = function () {

    $('.search-menu li li').click(function() {
        Session.set('searchQuery', $(this).text());
        Meteor.Router.to('/grid');
        window.scrollTo(0, 0);
    });
};
