$(function () {

// ============= CONTACT FORM VALIDATIONS SETTINGS ========================

    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },

        highlight: function(element) {
            $(element)
                .text('').addClass('error')
        },

        success: function(element) {
            element
                .text('').addClass('valid')
        }
    });



// ============= CONTACT FORM SCRIPT ========================

    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading');
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
                    $('#contact_submit').button('complete');
                },
                error: function() {
                    $('#contact_submit').button('reset');
                    $('#contact_submit').button('error');
                }
            });
            // return false to prevent normal browser submit and page navigation
        } else {
            $('#contact_submit').button('reset')
        }
        return false;
    });




});
