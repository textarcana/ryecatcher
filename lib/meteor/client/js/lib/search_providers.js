var searchProviders = function() {
    var searchTerm = $.trim(Session.get('searchQuery'));

    /*
     * TODO: works for keys from ResourceProviderCategories, doesn't work
     * for keys from ServiceProviderRolesV2
     */
    var searchResult = ListingsV2
        .find({'services' :
                new RegExp(searchTerm, 'i')},
              {'sort': {'name': 1}})
        .fetch();

    if (searchResult.length === 0) {

        var newSearch = ServiceProviderRolesV2
            .findOne({'name' : searchTerm});

        if(typeof newSearch !== 'undefined') {
            if(Conf.log.console.hedwig) {
                console.debug('Trying alternate search term: ', newSearch.category);
            }

            searchResult = ListingsV2
                .find({'services' :
                       new RegExp(newSearch.category, 'i')},
                      {'sort': {'name': 1}})
                .fetch();

        }



    }

    if(Conf.log.console.hedwig) {
        console.debug('searchProviders() saw Session::searchQuery \"%o\"', searchTerm);
        console.debug('searchProviders() result: ', searchResult);
    }


    return searchResult;
};
