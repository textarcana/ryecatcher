Template.create_profile_educator.rendered = function() {
    setTitle('Educator: Create Profile');

    $('#educator-profile-next').click(function() {
        Meteor.Router.to('/build/circle');
        window.scrollTo(0, 0);
    });
};


Template.create_profile_educator.checkboxLabels = function() {
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
                'Sensory Impairment',
                'Other'
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
