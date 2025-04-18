'use strict';

$(document).ready(function(){
    $('#header_globalNav_openNav').on('click', function(){
        $('#wrapper, #hamburgerMenu').toggleClass('hamburgerMenu_show');
    });
});