var getRoles = function(isInSchoolRole) {
    var result = ServiceProviderRolesV2.find({inSchool: isInSchoolRole}).fetch();

    if (result.length > 0) {
        return result.map(function(o){
            return o.name;
        }).sort();
    }
};

var getInSchoolRoles = function() {

    return getRoles(true);


};

var getExternalRoles = function() {

    return getRoles(false);

};

var getAllRoles = function() {

    var result = _.union(getInSchoolRoles(),
                         getExternalRoles());

    return result;
};
