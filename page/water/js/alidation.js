$( document ).ready(function() {
    /* page-kontakt.php */
    $('.freude-kontaktform').validate({
        rules: {
            Vorname: "required",
            Name: "required",
            Email: {
                required: true,
                email: true
            },
            Nachricht: "required"
        },
        messages: {
            rules: "Bitte prüfe deine Eingabe",
            Name: "Bitte prüfe deine Eingabe",
            Email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            Nachricht: "Bitte prüfe deine Eingabe"
        },
        errorElement : 'div',
        invalidHandler: function(event, validator) {
            $('.freude-label').addClass('blur');
        }
    });

    /* page-bezahlung.php */
    $('.bezahlung-form').validate({
        rules: {
            Vorname: "required",
            Name: "required",
            Addresse: "required",
            Ort: "required",
            PLZ: "required",
            Land: "required",
            Telefonnummer: "required",
            Email: {
                required: true,
                email: true
            },
            Nachricht: "required"
        },
        messages: {
            Vorname: "Bitte prüfe deine Eingabe",
            Name: "Bitte prüfe deine Eingabe",
            Email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            Nachricht: "Bitte prüfe deine Eingabe"
        },
        errorElement : 'div',
    });
});