Template.create_profile_student_disabilities.rendered = function() {
    setTitle('Educator: Create Profile');

    $('#disabilities-next').click(function() {

        var formData = $(':checked').toArray().map(function(o){
            return $(o).parent().text();
        });

        /* create your circle based on the disabilities you selected */

        var inSchoolRoles = [];
        var externalRoles = [];

        formData.map(function(o){
            var result = UnfilledCircles.findOne({'name': o });

            $.assert('object',
                     typeof result,
                     'Hash \"disabilityRoleAssociations\" should have key: ' + o);

            if (Conf.log.console.v023) {
                console.debug('OK: Hash \"disabilityRoleAssociations\" has key: ' + o);
            }

            inSchoolRoles = _.union(inSchoolRoles, result.inSchool);
            externalRoles = _.union(externalRoles, result.external);
        });

        if(Conf.log.console.v023) {
            console.debug('inSchoolRoles: ', inSchoolRoles);
            console.debug('externalRoles: ', externalRoles);
        }

        Session.set('studentDisabilities', formData);
        Session.set('inSchoolRoles', inSchoolRoles);
        Session.set('externalRoles', externalRoles);

        Meteor.Router.to('/circle');
        window.scrollTo(0, 0);
    });
};

Template.create_profile_student_disabilities.checkboxLabels = function() {
    return {
        'iep': {
            'explanation' : 'My child\'s Individualized Education Plan (IEP) is for:',
            'itemsPageOne' : [
                'Autistic/Autism',
                'Deaf-Blindness',
                'Deafness',
                'Developmental Delay',
                'Emotional Disturbance',
                'Hearing / Auditory Impairment',
                'Infants / Toddlers with Disabilities',
                'Mental Retardation'],
            'itemsPageTwo': [
                'Orthopedic Impairment',
                'Other Health Impairment',
                'Speech or Language Impairment',
                'Specific Learning Disability',
                'Traumatic Brain Delay',
                'Visual Impairment',
                'Multiple Disabilities'
            ]
        },
        'disability' : {
            'explanation' : 'My child\'s disability as defined by Section 504 is:',
            'items' : [
                'Attention Deficit Hyperactivity Disorder (ADHD)',
                'Medical Condition',
                'Motor Impairment',
                'Sensory Impairment'
            ]
        },
        'undiagnosed' : {
            'explanation' : 'My child is not yet diagnosed, but has symptoms of a special need:',
            'items' : [
                'Autistic/Autism',
                'Deaf-Blindness',
                'Deafness',
                'Developmental Delay',
                'Emotional Disturbance',
                'Hearing/Auditory Impairment',
                'Infants and Toddlers with Disabilities',
                'Mental Retardation',
                'Multiple Disabilities',
                'Orthopedic Impairment',
                'Other Health Impairment',
                'Speech or Language Impairment',
                'Specific Learning Disability',
                'Traumatic Brain Delay',
                'Visual Impairment',
                'Attention Deficit Hyperactivity Disorder (ADHD)',
                'Medical Condition',
                'Motor Impairment',
                'Sensory Impairment'
            ]
        },
        'subjects' : {
            'explanation' : 'My child is having difficulty with school work in the following subjects:',
            'items' : [
                'English/Language Arts',
                'Math',
                'Science',
                'Social Studies'

            ]
        },
        'actingUp' : {
            'explanation' : 'My child is acting out:',
            'items' : [
                'at home',
                'at school'
            ]
        }
    };
};


Template.create_profile_student_disabilities.isIEP = function() {
    return 'hasIEP' === Session.get('studentProfile').IEPRadioButton;
};

Template.create_profile_student_disabilities.isDisabled = function() {
    return 'hasDisability' === Session.get('studentProfile').IEPRadioButton;
};

Template.create_profile_student_disabilities.isUndiagnosed = function() {
    return 'undiagnosed' === Session.get('studentProfile').IEPRadioButton;
};

Template.create_profile_student_disabilities.isHavingDifficulty = function() {
    return Session.get('studentProfile').schoolDifficulty;
};

Template.create_profile_student_disabilities.isActingOut = function() {
    return Session.get('studentProfile').actingOut;
};

