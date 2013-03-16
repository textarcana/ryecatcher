/*
 * callback function for dropping elements on the circle
 *
 * EG:
 *         $('body > div').droppable({
 *            drop: function(e, ui) {
 *                $(ui.draggable).off().hide(500, circleDrop);
 *            }
 *        });
 *
 */

var circleDroppableBehavior = function() {

    var roleName;


    if ($(this).hasClass('role')) {
        /* drag listing cards OFF the circle  */

        var serviceProviderType = $(this).attr('data-title');

        if (Conf.log.console.hedwig) {
            console.debug('Remove from circle: %s', serviceProviderType);
            console.debug('Destroy card: %o', this);
        }

        Session.set('inSchoolRoles',
                    _.without(Session.get('inSchoolRoles'), serviceProviderType)
                   );

        Session.set('externalRoles',
                    _.without(Session.get('externalRoles'), serviceProviderType)
                   );

        $(this).remove();

    } else if ($(this).hasClass('inSchoolRole')) {
        /* drag in-school role TO circle */

        roleName = $.trim($(this).text());

        if (Conf.log.console.hedwig) {
            console.debug('In School role dragged to circle: %o', roleName);
        }

        Session.set('inSchoolRoles',
                    _.union(Session.get('inSchoolRoles'),
                            [roleName]));


    } else if ($(this).hasClass('externalRole')) {
        /* drag External role TO circle */

        roleName = $.trim($(this).text());

        if (Conf.log.console.hedwig) {
            console.debug('external role dragged to circle: %o', roleName);
        }

        Session.set('externalRoles',
                    _.union(Session.get('externalRoles'),
                            [roleName]));
    } else {
        /* it is a fatal error to drop something on the
         * circle that the circle cannot understand
         */

        console.log('Dropping element had no effect: ', this);

        $.assert(true,
                 false,
                 'Circle did not know what action to take for dropped element!');
    }
};

