Template.create_profile.zip = function() {
    return 'zip code';
};

Template.create_profile.created = function() {
    setTitle('Create Profile');
};

Template.create_profile.rendered = function() {
    $('#zipCode').keyup(function(){
        if(this.value.length >= 5){
            $('.littleMap').removeClass('hide');
        } else {
            $('.littleMap').addClass('hide');
        }
    });

    $('#student-form-start-button').click(function() {

        var formData = {};

        /* TODO we have zero validation for any of this data */
        formData.gradeLevel = $('#grade-select-menu option:selected').text();
        formData.zipCode = $('#zipCode').val();

        formData.IEPRadioButton = $('.radio input:checked').attr('id');

        formData.schoolDifficulty = $('#schoolDifficulty:checked').length > 0;
        formData.actingOut = $('#actingOut:checked').length > 0;

        Session.set('studentProfile', formData);

        Meteor.Router.to('/profile/create/disabilities');
        window.scrollTo(0, 0);
    });
};

