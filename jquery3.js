'use strict';
$(function () {
    $('#label').hide();
    $('#label2').hide();
    $('#like').hide();
    $('#like2').hide();

    $('#select').change(function () {
      var val = $(this).val();

        switch (val) {
            case '1':

                $('#label').show();
                $('#label2').show();
                $('#like').hide();
                $('#like2').hide();
                break;
            case '2':

                $('#like').show();
                $('#like2').show();
                $('#label').hide();
                $('#label2').hide();
        }
    });
});
