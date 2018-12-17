/*global URLify*/
(function($) {
    'use strict';
    $.fn.prepopulate = function(dependencies, maxLength, allowUnicode) {
        /*
            Depends on urlify.js
            Populates a selected field with the values of the dependent fields,
            URLifies and shortens the string.
            dependencies - array of dependent fields ids
            maxLength - maximum length of the URLify'd string
            allowUnicode - Unicode support of the URLify'd string
        */
        return this.each(function() {
            var prepopulatedField = $(this);

            var populate = function() {
                // Bail if the field's value has been changed by the user
                if (prepopulatedField.data('_changed')) {
                    return;
                }

                var values = [];
                $.each(dependencies, function(i, field) {
                    field = $(field);
                    if (field.val().length > 0) {
                        values.push(field.val());
                    }
                });
                prepopulatedField.val(URLify(values.join(' '), maxLength, allowUnicode));
            };

            prepopulatedField.data('_changed', false);
<<<<<<< HEAD
            prepopulatedField.change(function() {
=======
            prepopulatedField.on('change', function() {
>>>>>>> 7b825a43d15c4a80af35c812a3960cfdaeea238f
                prepopulatedField.data('_changed', true);
            });

            if (!prepopulatedField.val()) {
<<<<<<< HEAD
                $(dependencies.join(',')).keyup(populate).change(populate).focus(populate);
=======
                $(dependencies.join(',')).on('keyup change focus', populate);
>>>>>>> 7b825a43d15c4a80af35c812a3960cfdaeea238f
            }
        });
    };
})(django.jQuery);
