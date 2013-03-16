var searchIcon = function() {
    var searchTerm = $.trim(Session.get('searchQuery'));

    var searchResult = ServiceProviderRolesV2
        .findOne({'name' :
                  new RegExp(searchTerm, 'i')});

    if (! searchResult) {
        searchResult = ResourceProviderCategories
            .findOne({'name' :
                      new RegExp(searchTerm, 'i')});
    }

    try{
        return searchResult.icon;
    } catch (e) {
        $.assert(false,
                 true,
                 'Could not retrieve an icon for ' + searchTerm + 'because ' + e.message);
    }

};
