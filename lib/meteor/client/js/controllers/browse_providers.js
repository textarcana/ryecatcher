Template.browse_providers.created = function () {
    setTitle('Browse Service Providers');
};

Template.browse_providers.listings = function () {
    return ListingsV2.find({}, {sort: {'name': 1}});
};
