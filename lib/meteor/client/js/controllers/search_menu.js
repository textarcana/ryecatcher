Template.search_menu.externalRoles = function() {
    return ResourceProviderCategories.find().fetch().map(function(o){
        return o.name;
    }).sort();
};
