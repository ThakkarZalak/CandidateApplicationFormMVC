
callBack();

function callBack() {

    $(function () {

        $('.no_number').keydown(function (e) {
            var key = e.keyCode;
            if (key > 47 && key < 58) {
                e.preventDefault();
            }
        });
        $('input[type=number]').keydown(function (e) {
            var key = e.keyCode;
            if (key == 69) {
                e.preventDefault();
            }
            
        });
    });
}


function validation() {

    var firstslide = true;
    var secondslide = true;
    var thirdslide = true;
    var fourthslide = true;
    var fifthslide = true;
    var sixthslide = true;

    if (count == 0) {
        var slide_1 = ["c_person", "inperson_interview", "posi_desired", "pref_loc", "current_ctc", "exp_salary", "availability", "venue"];
        var c_person = document.getElementById("c_person").value;
        var inperson_interview = document.getElementById("inperson_interview").value;
        var posi_desired = document.getElementById("posi_desired").value;
        var pref_loc = document.getElementById("pref_loc").value;
        var current_ctc = document.getElementById("current_ctc").value;
        var exp_salary = document.getElementById("exp_salary").value;
        var availability = document.getElementById("availability").value;
        var venue = document.getElementById("venue").value;
        if (c_person == "" || inperson_interview == "" || posi_desired == "" || pref_loc == "" || current_ctc == "" || exp_salary == "" || availability == "" || venue == "") {
            for (var i = 0; i < slide_1.length; i++) {
                if (document.getElementById(slide_1[i]).value == "") {
                    document.getElementById(slide_1[i]).classList.remove("text");
                    document.getElementById(slide_1[i]).classList.add("invalid");
                }
                else {
                    document.getElementById(slide_1[i]).classList.remove("invalid");
                    document.getElementById(slide_1[i]).classList.add("text");
                }
            }
            firstslide = false;
        }
        else {
            firstslide = true;
        }
    }
    if (count == 1) {
        var slide_2 = ["firstname", "middelname", "lastname", "address", "email", "phone", "lanline", "dob", "age"];
        var firstname = document.getElementById("firstname").value;
        var middelname = document.getElementById("middelname").value;
        var lastname = document.getElementById("lastname").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var lanline = document.getElementById("lanline").value;
        var dob = document.getElementById("dob").value;
        var age = document.getElementById("age").value;
        var marital_status = $("input[name='MaritalStatus']:checked").val();
        var gender = $("input[name='Gender']:checked").val();
        if (firstname == "" || middelname == "" || lastname == "" || address == "" || email == "" || phone == "" || lanline == "" || dob == "" || age == "" || marital_status == undefined || gender == undefined || !emailValid(email)) {
            for (var i = 0; i < slide_2.length; i++) {
                if (document.getElementById(slide_2[i]).value == "") {
                    document.getElementById(slide_2[i]).classList.remove("text");
                    document.getElementById(slide_2[i]).classList.add("invalid");
                }
                else {
                    document.getElementById(slide_2[i]).classList.remove("invalid");
                    document.getElementById(slide_2[i]).classList.add("text");
                }
            }
            secondslide = false;
        }
        else {
            secondslide = true;
        }
    }
    if (count == 2) {

        var slide_3 = ["language", "about_coll", "knowabt_coll", "career_aspiration", "suitability","resume"];
        var language = document.getElementById("language").value;
        var about_coll = document.getElementById("about_coll").value;
        var knowabt_coll = document.getElementById("knowabt_coll").value;
        var career_aspiration = document.getElementById("career_aspiration").value;
        var suitability = document.getElementById("suitability").value;
        var resume = upload_valid;

        if (language == "" || about_coll == "" || knowabt_coll == "" || career_aspiration == "" || suitability == "" || !resume) {
            for (var i = 0; i < slide_3.length; i++) {
                if (document.getElementById(slide_3[i]).value == "") {
                    if (slide_3[i] == "language") {
                        select2[0].style.borderBottom = "1px solid red";
                    }
                    document.getElementById(slide_3[i]).classList.remove("text");
                    document.getElementById(slide_3[i]).classList.add("invalid");
                }
                else {
                    document.getElementById(slide_3[i]).classList.remove("invalid");
                    document.getElementById(slide_3[i]).classList.add("text");
                   
                }
                if (slide_3[i] == "resume" && !resume) {
                    swal({
                        title: "Warning!",
                        text: "Please upload the file!",
                        icon: "warning",
                        button: "Okay",
                    });
                    document.getElementById("resume_input").classList.add("invalid_file");
                }
            }
            thirdslide = false;
        }
        else {
            thirdslide = true;
        }
    }
    if (count == 3) {
        var no_edu = document.getElementsByClassName("education").length;
        var slide_4 = ["Course", "YearGraduate", "SchoolUniversity", "OtherTrainings"];

        for (var i = 0; i < no_edu; i++) {


            var course_val = document.getElementsByName("Course")[i].value;
            var year_graduat_val = document.getElementsByName("YearGraduate")[i].value;
            var school_university_val = document.getElementsByName("SchoolUniversity")[i].value;
            var trainings_val = document.getElementsByName("OtherTrainings")[i].value;
            if (course_val == "" || year_graduat_val == "" || school_university_val == "" || trainings_val == "") {
                for (var j = 0; j < slide_4.length; j++) {
                    if (document.getElementsByName(slide_4[j])[i].value == "") {
                        document.getElementsByName(slide_4[j])[i].classList.remove("text");
                        document.getElementsByName(slide_4[j])[i].classList.add("invalid");
                    }
                    else {
                        document.getElementsByName(slide_4[j])[i].classList.remove("invalid");
                        document.getElementsByName(slide_4[j])[i].classList.add("text");
                    }
                }
                fourthslide = false;
            }
            else {
                fourthslide = true;
            }
        }


    }
    if (count == 4) {
        var no_emp = document.getElementsByClassName("employee").length;
        var slide_5 = ["Position", "Company", "FromDate", "ToDate", "Skills"];

        for (var i = 0; i < no_emp; i++) {


            var position = document.getElementsByName("Position")[i].value;
            var company = document.getElementsByName("Company")[i].value;
            var from_date = document.getElementsByName("FromDate")[i].value;
            var to_date = document.getElementsByName("ToDate")[i].value;
            var skills = document.getElementsByName("Skills")[0].value;
            if (position == "" || company == "" || from_date == "" || to_date == "" || skills == "") {
                for (var j = 0; j < slide_5.length; j++) {
                    if (document.getElementsByName(slide_5[j])[i].value == "") {
                        if (slide_5[j] == "Skills") {
                            select2[1].style.borderBottom = "1px solid red";
                        }
                        document.getElementsByName(slide_5[j])[i].classList.remove("text");
                        document.getElementsByName(slide_5[j])[i].classList.add("invalid");
                    }
                    else {
                        document.getElementsByName(slide_5[j])[i].classList.remove("invalid");
                        document.getElementsByName(slide_5[j])[i].classList.add("text");
                    }
                }
                fifthslide = false;
            }
            else {
                fifthslide = true;
            }
        }


    }
    if (count == 5) {
        var no_ref = document.getElementsByClassName("reference").length;
        var slide_6 = ["ReferenceName", "ReferenceRelationship", "ReferenceContactNo"];

        for (var i = 0; i < no_ref; i++) {


            var ref_name_val = document.getElementsByName("ReferenceName")[i].value;
            var relationship_val = document.getElementsByName("ReferenceRelationship")[i].value;
            var ref_contact_val = document.getElementsByName("ReferenceContactNo")[i].value;
            if (ref_name_val == "" || relationship_val == "" || ref_contact_val == "") {
                for (var j = 0; j < slide_6.length; j++) {
                    if (document.getElementsByName(slide_6[j])[i].value == "") {
                        document.getElementsByName(slide_6[j])[i].classList.remove("text");
                        document.getElementsByName(slide_6[j])[i].classList.add("invalid");
                    }
                    else {
                        document.getElementsByName(slide_6[j])[i].classList.remove("invalid");
                        document.getElementsByName(slide_6[j])[i].classList.add("text");
                    }
                }
                sixthslide = false;
            }
            else {
                sixthslide = true;

            }
        }
    }
    if (firstslide == true && secondslide == true && thirdslide == true && fourthslide == true && fifthslide == true && sixthslide == true) {
        var valid = true;
    }
    else {
        var valid = false;
    }
    return valid;
}

function emailValid(data) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = re.test(String(data).toLowerCase());
    return valid;
}


