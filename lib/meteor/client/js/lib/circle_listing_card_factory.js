/*
 * merge Session::providers (set by the Fill The Role button) into
 * Session::providerIcons and return the result.
 */

var circleListingCardFactory = function(key) {
    var role = ServiceProviderRolesV2.findOne({'name' : key}),
        providerType = role.name,
        providerName = role.name,
        myFilledRoles = Session.get('filledRoles'),
        newProviderName,
        result,
        isInSchoolRole = -1 < _.indexOf(Session.get('inSchoolRoles'), key);

    /* fill the role */

    try {
        newProviderName = myFilledRoles[providerName].name;

        providerName = newProviderName;
    } catch (e) {
        if(Conf.log.console.v023) {

            console.debug('Missing key \"%s\"in %o: ',
                          providerName,
                          myFilledRoles,
                          e.message);
        }
    }

    return {
        'icon' : role.icon,
        'shortName' : providerType,
        'type' : providerType,
        'name' : providerName,
        'inSchool' : (isInSchoolRole ? 'inSchool' : 'external')
    };
};
