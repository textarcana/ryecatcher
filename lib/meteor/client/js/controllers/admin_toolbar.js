Template.adminToolbar.rendered = function() {
    $('#adminToolbar').draggable();
};

Template.adminToolbar.messages = function() {
    try{
        return [
            {
                label: 'listings count: ',
                value: ListingsV2.find({}).fetch().length
            },
            {
                label: 'active route: ',
                value: Meteor.Router.page()
            },
            {
                label: 'meteor status:',
                value: Meteor.status().status
            },
            {
                label: 'last render time:',
                value: Date()
            },
            {   label: 'Provider types you have added to your circle: ',
                value: (Session.get('filledRoles') && _.keys(Session.get('filledRoles')).sort())
            },
            {   label: 'Student disabilities: ',
                value: (Session.get('studentDisabilities') &&
                        Session.get('studentDisabilities').sort())
            },
            {   label: 'In-School roles in your circle: ',
                value: (Session.get('inSchoolRoles') && Session.get('inSchoolRoles').sort())
            },
            {   label: 'Out-Of-School roles in your circle: ',
                value: (Session.get('externalRoles') && Session.get('externalRoles').sort())
            },
            {   label: 'Search type:',
                value: Session.get('searchQuery')
            },
            {   label: 'Session keys:',
                value: _.keys(Session.keys).sort().join(', ')
            }
        ];
    } catch (e) {
        throw new Error('Failed to load admin toolbar: %o', e);
    }
};

Template.adminToolbar.warnings = function() {
    return [
        /* {
           message: 'You have been warned!'
           } */
    ];
};

Template.adminToolbar.show = function() {
    var IS_DEV = (new RegExp('localhost')).test(location.hostname);

    return IS_DEV;
};
