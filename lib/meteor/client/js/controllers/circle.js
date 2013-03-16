/*jshint sub:true */

Template.circle.created = function () {
    setTitle('Circle');
};


Template.circle.rendered = function () {

    /*
     * Drag roles on and off the circle.
     */
    $('.listings .role').draggable();
    $('.inSchoolRole').draggable();
    $('.externalRole').draggable();

    $('body > div').droppable({
        drop: function(e, ui) {
            $(ui.draggable).off().hide(500, circleDroppableBehavior);
        }
    });


    $('.role p').each(function(i, o){
        var old,
            oldHTML;

        var myLink = $('a', this);

        if (Conf.log.console.v023) {
            console.debug('Retrieving raw provider type from',
                          myLink);
        }

        var rawProviderType = myLink.text();

        $.assert(false,
                rawProviderType === '',
                'rawProviderType should be a non-empty string.');

        if (Conf.log.console.v023) {
            console.debug('Raw provider type: ', rawProviderType);
        }


        $(o).hoverIntent(
            function(){
                old = $(this);
                oldHTML = old.html();

                console.debug('old generic listing card: ', old);

                var providerType = $('a', this).text();

                console.debug('generic listing type, from hidden card: ', providerType);

                $(this).html('<br><span class="fakeLink viewDetails" style=\"color: #0088cc;\">' +
                             'view details</span><hr><span  class="fakeLink fillRole" ' +
                             ' data-title=\"' + $('a', old).text()  + '\" ' +
                             'style=\"color: #0088cc;\">fill role</span>');

                $('.fillRole', this).click(function() {
                    console.log('%o has data-title: %s', this, providerType);

                    Session.set('searchQuery', providerType);

                    if (Conf.log.console.v023) {
                        console.debug('Search for provider type:', Session.get('searchQuery'));
                    }

                    Meteor.Router.to('/grid');
                    window.scrollTo(0, 0);
                });

                $('.viewDetails', this).click(function() {
                    $('#circleModal').toggleClass('fade hide');

                    $('#circleModal .close').click(function() {
                        $('#circleModal').addClass('fade hide');
                    });

                });

            },
            function(){
                $(this).html(oldHTML);
            });
    });

};

Template.circle.providerRoles = function() {

    var result;

    try {
        result = {
            'roles' : {
                'inSchool' : Session.get('inSchoolRoles').map(circleListingCardFactory),
                'external' : Session.get('externalRoles').map(circleListingCardFactory)
            }
        };

    } catch (e) {

        if(Conf.log.console.v022) {
            console.log('Circle is not configured, using default.');
        }

        result = defaultCircle;

    }

   if (Conf.log.console.v023) {
        console.debug('Your circle: %o', result);
    }


    return result;

};

Template.circle.inSchoolRoles = function () {
    return getInSchoolRoles();
};


Template.circle.externalRoles = function () {
    return getExternalRoles();
};


Template.circle.circleDisplaySize = function() {
    var providersInCircleCount;
    if(Session.get('inSchoolRoles') && Session.get('externalRoles')) {
        providersInCircleCount = Session.get('inSchoolRoles').length +
            Session.get('externalRoles').length;
    } else {
        providersInCircleCount = 5;
    }

    if (providersInCircleCount > 9) {
        providersInCircleCount = 9;
    } else if (providersInCircleCount < 5) {
        providersInCircleCount = 5;
    }

    if (Conf.log.console.v023) {
        console.debug('Displayed circle size: ', providersInCircleCount);
    }

    return providersInCircleCount;

};
