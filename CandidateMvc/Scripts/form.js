
//----------- Add language -----------------
var lang = languages;
for (i in lang) {
    $("#language").append('<option value='+ lang[i]["name"] +'>' + lang[i]["name"] +'</option>');
}


var select2 = document.getElementsByClassName("select2-selection");
// -------- JS FOR INPUT TEXT AND TEXTAREA--------------
function focus_label(label_id, id) {
    var data = document.getElementById(id).value;
    // alert();
    if (data != "") {
        var label_element = document.getElementById(label_id);
        label_element.classList.add("label_focus");
        // alert(data);
    }
    else {
        var label_element = document.getElementById(label_id);
        label_element.classList.remove("label_focus");

    }
    if (data == "") {
        document.getElementById(id).classList.remove("text");
        document.getElementById(id).classList.add("invalid");

    }
    else {
        document.getElementById(id).classList.remove("invalid");
        document.getElementById(id).classList.add("text");

    }
    if (id == "email") {
        var email_valid = emailValid(data);
        if (email_valid) {
            document.getElementById(id).classList.remove("invalid");
            document.getElementById(id).classList.add("text");

        }
        else {
            document.getElementById(id).classList.remove("text");
            document.getElementById(id).classList.add("invalid");

        }
    }
    
}
// Calculate Age

//function calcAge() {
    
//    var dob = document.getElementById("dob").value;
//    if (!(dob == "") && dobValid(dob)) {
//        date = dob.split('-');
//        var dob_yyyy = parseInt(date[0]);
//        var dob_mm = parseInt(date[1]);
//        var dob_dd = parseInt(date[2]);
//        var today = new Date();
//        var dd = (today.getDate());
//        var mm = (today.getMonth() + 1); //January is 0!
//        var yyyy = today.getFullYear();
//        var age = yyyy - dob_yyyy;
//        if ((mm - dob_mm) < 0) {
//            age--;
//        }
//        document.getElementById("age").value = age;
//        document.getElementById("age").focus();
//    }
    
//}

// JS FOR NEXT SLIDE

var count = 0;
var no_count = 0;
function nextSlide() {

    
    var next_valid = validation();

    if (next_valid) {

        count = count + 1;
        var nex_id = document.getElementsByClassName("slide")[count].id;
        var prev_id = document.getElementsByClassName("slide")[count - (no_count + 1)].id;
        var nex_element = document.getElementById(nex_id);
        nex_element.classList.remove("none");
        var prev_element = document.getElementById(prev_id);
        prev_element.classList.add("none");
        if (count > 0) {
            var prev_btn = document.getElementById("previous");
            prev_btn.classList.remove("none");
        }
        if (count == 5) {
            var submit_btn = document.getElementById("submit");
            submit_btn.classList.remove("none");
            var next_btn = document.getElementById("next");
            next_btn.classList.add("none");
        }
        else {
            var submit_btn = document.getElementById("submit");
            submit_btn.classList.add("none");
            var next_btn = document.getElementById("next");
            next_btn.classList.remove("none");
        }

        var nex_state = document.getElementsByClassName("state")[count].id;
        var prev_state = document.getElementsByClassName("state")[count - (no_count + 1)].id;
        var nex_state_element = document.getElementById(nex_state);
        var prev_state_element = document.getElementById(prev_state);
        nex_state_element.classList.add("active");
        nex_state_element.classList.add("active_state");
        prev_state_element.classList.remove("active_state");

        no_count = 0;
    }
}

// JS FOR PREVIOUS SLIDE
function previousSlide() {
    count = count - 1;
    firstslide = true;
    secondslide = true;
    thirdslide = true;
    fourthslide = true;
    fifthslide = true;
    sixthslide = true;

    var prev_id = document.getElementsByClassName("slide")[count].id;
    var nex_id = document.getElementsByClassName("slide")[count - (no_count - 1)].id;
    var nex_element = document.getElementById(nex_id);
    nex_element.classList.add("none");
    var prev_element = document.getElementById(prev_id);
    prev_element.classList.remove("none");
    if (count < 5) {
        var submit_btn = document.getElementById("submit");
        submit_btn.classList.add("none");
        var next_btn = document.getElementById("next");
        next_btn.classList.remove("none");
    }
    if (count == 0) {
        var prev_btn = document.getElementById("previous");
        prev_btn.classList.add("none");
    }

    var nex_state = document.getElementsByClassName("state")[count + 1].id;
    var nex_active_state = document.getElementsByClassName("state")[count - (no_count - 1)].id;
    var prev_state = document.getElementsByClassName("state")[count].id;
    var nex_state_element = document.getElementById(nex_state);
    var nex_active_state_element = document.getElementById(nex_active_state);
    var prev_state_element = document.getElementById(prev_state);
    nex_state_element.classList.remove("active");
    nex_active_state_element.classList.remove("active_state");
    prev_state_element.classList.add("active_state");

    no_count = 0;

}
// FOR THIRD SLIDE FILE INPUT

$('.custom-file input').change(function (e) {
    $(this).next('.custom-file-label').html(e.target.files[0].name);
});

//For slide 4
var edu_no = 2;
function createEduData() {
    var parent_element = document.getElementById("edu");
    var para = document.createElement("div");
    var course = "course" + edu_no;
    var label_course = "label_course" + edu_no;
    var year_graduat = "year_graduat" + edu_no;
    var label_year_graduat = "label_year_graduat" + edu_no;
    var school_university = "school_university" + edu_no;
    var label_school_university = "label_school_university" + edu_no;
    var trainings = "trainings" + edu_no;
    var label_trainings = "label_trainings" + edu_no;
    var edu = "edu_" + edu_no;


    var row = "<div id='" + edu + "' class='education'>" +
        "<div class='row'>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + course + " class='text' name='Course' onfocusout=focus_label('" + label_course + "','" + course + "')>" +
        "<label id=" + label_course + " class='text_label'>Course</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='number' id=" + year_graduat + " class='text' name='YearGraduate' onfocusout=focus_label('" + label_year_graduat + "','" + year_graduat + "')>" +
        "<label id=" + label_year_graduat + " class='text_label'>Year Graduate</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!-- SECOND ROW OF FORTH SLIDE -->" +
        "<div class='row'>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + school_university + " class='text' name='SchoolUniversity' onfocusout=focus_label('" + label_school_university + "','" + school_university + "')>" +
        "<label id=" + label_school_university + " class='text_label'>School & University</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + trainings + " class='text' name='OtherTrainings' onfocusout=focus_label('" + label_trainings + "','" + trainings + "')>" +
        "<label id=" + label_trainings + " class='text_label'>Other Trainings Attended</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-1 offset-11'>" +
        "<div class='group' >" +
        "<a onclick=removeEmployee('" + edu + "')>" +
        "<ion-icon name='close' style='font-size: 30px;color: #c00;'></ion-icon>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    "</div>";
    para.innerHTML = row;
    parent_element.appendChild(para);
    edu_no++;
    callBack();
    callBackDate();
}

function removeEduData(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    // emp_no--;

}

// FOR SLIDE 5

var emp_no = 2;

function createEmployee() {

    var parent_element = document.getElementById("emp");
    var para = document.createElement("div");

    var emp = "emp_" + emp_no;
    var position = "position_" + emp_no;
    var label_position = "label_position_" + emp_no;
    var company = "company" + emp_no;
    var label_company = "label_company" + emp_no;
    var from_date = "from-date" + emp_no;
    var label_from_date = "label_from-date" + emp_no;
    var to_date = "to-date" + emp_no;
    var label_to_date = "label_to-date" + emp_no;
    // var ref_id = "'row_" + ref_no + "'";
    var row = "<div id='" + emp + "' class='employee'>" +
        "<div class='row'>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + position + " class='text no_number' name='Position' onfocusout=focus_label('" + label_position + "','" + position + "')>" +
        "<label id=" + label_position + " class='text_label'>Position</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + company + " class='text' name='Company' onfocusout=focus_label('" + label_company + "','" + company + "')>" +
        "<label id=" + label_company + " class='text_label'>Company</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md'>" +
        "<div class='dates group'>" +
        "<input type='text' class='text date' id=" + from_date + " name='FromDate' autocomplete='off' onfocusout=focus_label('" + label_from_date + "','" + from_date + "')>" +
        "<label id=" + label_from_date + " class='text_label'>From Date</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md'>" +
        "<div class='dates group'>" +
        "<input type='text' class='text date' id=" + to_date + " name='ToDate' autocomplete='off' onfocusout=focus_label('" + label_to_date + "','" + to_date + "')>" +
        "<label id=" + label_to_date + " class='text_label'>To Date</label>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-1 offset-11'>" +
        "<div class='group' >" +
        "<a onclick=removeEmployee('" + emp + "')>" +
        "<ion-icon name='close' style='font-size: 30px;color: #c00;'></ion-icon>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

    para.innerHTML = row;
    parent_element.appendChild(para);
    emp_no++;
    callBack();
    callBackDate();
}

function removeEmployee(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    //emp_no--;


}

// FOR SLIDE 6 ADDING AND REMOVING ROW
var ref_no = 2;


function createRefrence() {

    var parent_element = document.getElementById("ref");
    var para = document.createElement("div");
    var ref = "refrence_" + ref_no;
    var ref_name = "ref_name_" + ref_no;
    var label_ref_name = "label_ref_name" + ref_no;
    var relationship = "relationship" + ref_no;
    var label_relationship = "label_relationship" + ref_no;
    var ref_contact = "ref_contact" + ref_no;
    var label_ref_contact = "label_ref_contact" + ref_no;

    // alert(typeof(ref))
    // var ref_id = "'row_" + ref_no + "'";
    var row = "<div id=" + ref + " class='reference row'>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + ref_name + " class='text no_number' name='ReferenceName' onfocusout=focus_label('" + label_ref_name + "','" + ref_name + "')>" +
        "<label id=" + label_ref_name + " class='text_label'>Name</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='text' id=" + relationship + " class='text no_number' name='ReferenceRelationship' onfocusout=focus_label('" + label_relationship + "','" + relationship + "')>" +
        "<label id=" + label_relationship + " class='text_label'>Relationship</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md'>" +
        "<div class='group'>" +
        "<input type='number' id=" + ref_contact + " class='text' name='ReferenceContactNo' onfocusout=focus_label('" + label_ref_contact + "','" + ref_contact + "')>" +
        "<label id=" + label_ref_contact + " class='text_label' >Contact No.:</label>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div class='group'>" +
        "<a onclick=removeRefrence('" + ref + "')>" +
        "<ion-icon name='close' style='font-size: 30px; color: #c00;'></ion-icon>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>";
    para.innerHTML = row;
    parent_element.appendChild(para);
    ref_no++;
    callBack();
    // alert()
}

function removeRefrence(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    // ref_no--;
}




// FOR LI CLICK 

function liClick(no) {

    if (no < count + 1) {

        no_count = count - no;

        for (var i = 0; i < 6; i++) {
            if (i == no) {
                var slide_id = document.getElementsByClassName("slide")[i].id;
                var slide_element = document.getElementById(slide_id);
                slide_element.classList.remove("none");
                var li_id = document.getElementsByClassName("state")[i].id;
                var li_element = document.getElementById(li_id);
                li_element.classList.add("active_state");
                // alert(count);
            }
            else {
                var slide_id = document.getElementsByClassName("slide")[i].id;
                var slide_element = document.getElementById(slide_id);
                slide_element.classList.add("none");
                var li_id = document.getElementsByClassName("state")[i].id;
                var li_element = document.getElementById(li_id);
                li_element.classList.remove("active_state");
            }

        }


    }


}





// function fun() {
//   alert();
// }