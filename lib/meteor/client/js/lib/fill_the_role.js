/* Fill The Role */

var fillTheRole = function(elementClicked) {

    var providerID = $(elementClicked).attr('data-id');

    var providerType = Session.get('searchQuery');

    console.debug('Provider ID %s added to your circle in the %s slot: ',
                  providerID,
                 providerType);

    var providerListing = ListingsV2.findOne({_id: providerID});

    var provider = {
        'type' : providerType,
        'name' : providerListing.name
    };

    if(Conf.log.console.hedwig) {
        console.debug('Fill The Role triggered for listing : ',
                      provider);
    }


    var myProviders = Session.get('filledRoles');

    if (! _.isObject(myProviders)) {
        myProviders = {};
    }

    myProviders[providerType] = provider;

    Session.set('filledRoles', myProviders);

    Meteor.Router.to('/circle');
    window.scrollTo(0, 0);
};
