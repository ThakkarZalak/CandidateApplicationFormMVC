"use strict";

$(document).ready(function domReady() {
    $("#language").select2({
        placeholder: "Languages you know..",
        theme: "material"

    }).on('select2:select', function (e) {
        select2[0].style.borderBottom = "1px solid #757575";
    });
    
    //$("#year_graduat").select2({
    //    placeholder: "Languages you know..",
    //    theme: "material"
    //});
    $("#skills").select2({
        tags: true,
        tokenSeparators: [',', ' '],
        placeholder: "Skills/Technology used",
        theme: "material"
    }).on('select2:select', function (e) {
        select2[1].style.borderBottom = "1px solid #757575";
    });
   
    // $("#marital_status").select2({
    //     placeholder: "Marital Status",
    //     theme: "material",
        
    // });
    $(".select2-search__field").removeAttr("style").attr("style","width:100%");
    
    $(".select2-selection__arrow")
        .addClass("material-icons")
        .html("arrow_drop_down");

    
});