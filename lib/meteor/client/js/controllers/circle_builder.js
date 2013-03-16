Template.circle_builder.rendered = function() {
    setTitle('Build a new circle');

    $('#circle-builder-next').click(function() {
        Meteor.Router.to('/build/circle/preview');
        window.scrollTo(0, 0);
    });
};
