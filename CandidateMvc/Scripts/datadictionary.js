$("#msform").submit(function (e) {
    e.preventDefault();

    var data = {};
    var valid = validation();

    if (valid) {
        $(".demo").show();

        // FOR CANDIDATE TABLE

        var candidate_info = {
            ContactPerson: $("#c_person").val(),
            InPersonInterview: $("#inperson_interview").val(),
            PositionDesired: $("#posi_desired").val(),
            PreferedLocation: $("#pref_loc").val(),
            CurrentCTC: $("#current_ctc").val(),
            ExpectedSalary: $("#exp_salary").val(),
            AvailabilityOnBoard: $("#availability").val(),
            Venue: $("#venue").val(),
            FirstName: $("#firstname").val(),
            MidName: $("#middelname").val(),
            LastName: $("#lastname").val(),
            Address: $("#address").val(),
            Email: $("#email").val(),
            Phone: $("#phone").val(),
            LanLine: $("#lanline").val(),
            DateOfBirth: $("#dob").val(),
            Age: $("#age").val(),
            MaritalStatus: $("input[name='MaritalStatus']:checked").val(),
            Gender: $("input[name='Gender']:checked").val(),
            AboutCollabera: $("#about_coll").val(),
            KnowAboutCollabera: $("#knowabt_coll").val(),
            CareerAspiration: $("#career_aspiration").val(),
            Suitability: $("#suitability").val(),
        }
        data.candidate = candidate_info;

        // FOR EDUCATION TABLE

        var edu_array = [];
        var arr = $(".education").find('.text')
        for (var i = 0; i < arr.length; i += 4) {
            var art = arr.slice(i, i + 4)
            var edu_value = {}
            for (var j = 0; j < art.length; j++) {
                if (j == 0) {
                    edu_value.Course = $(art[j]).val();
                }
                else if (j == 1) {
                    edu_value.YearGraduate = $(art[j]).val();

                }
                else if (j == 2) {
                    edu_value.SchoolUniversity = $(art[j]).val();

                }
                else {
                    edu_value.OtherTrainings = $(art[j]).val();

                }


            }
            edu_array.push(edu_value)
        }
        data.education = edu_array;

        //FOR RECENTEMPLOYEER TABLE

        var emp_array = [];
        var arr = $(".employee").find('.text')
        for (var i = 0; i < arr.length; i += 4) {
            var art = arr.slice(i, i + 4)
            var emp_value = {}
            for (var j = 0; j < art.length; j++) {
                if (j == 0) {
                    emp_value.Position = $(art[j]).val();
                }
                else if (j == 1) {
                    emp_value.Company = $(art[j]).val();

                }
                else if (j == 2) {
                    emp_value.FromDate = $(art[j]).val();

                }
                else {
                    emp_value.ToDate = $(art[j]).val();

                }
            }
            emp_array.push(emp_value)
        }
        data.employee = emp_array;

        // FOR REFERENCES TABLE

        var ref_array = [];
        var arr = $(".reference.row").find('.text')
        for (var i = 0; i < arr.length; i += 3) {
            var art = arr.slice(i, i + 3)
            var ref_value = {}
            for (var j = 0; j < art.length; j++) {
                if (j == 0) {
                    ref_value.ReferenceName = $(art[j]).val();
                }
                else if (j == 1) {
                    ref_value.ReferenceRelationship = $(art[j]).val();

                }
                else {
                    ref_value.ReferenceContactNo = $(art[j]).val();
                }

            }
            ref_array.push(ref_value)
        }
        data.references = ref_array;

        // AJAX REQUEST FOR FORM SUBMIT

        $.ajax({
            type: "POST",
            url: '/Home/Form',
            data: { c: candidate_info, Lang: $("#language").val(), edu: edu_array, emp: emp_array, Skills: $("#skills").val(), refer: ref_array },
            success: function (response) {
                $(".demo").hide();
                if (response == "True") {
                    swal({
                        title: "Success!",
                        text: "Your resume is submited successfully!",
                        icon: "success",
                        button: "Okay",
                    }).then(() => {
                        location.reload();
                        document.getElementById("msform").reset();
                    });
                }
                else {
                    swal({
                        title: "Error!",
                        text: "Your resume can not be submited, please fill the required fields!",
                        icon: "error",
                        button: "Okay",
                    });
                }

            },
            error: function (error) {
                $(".demo").hide();

                swal({
                    title: "Error!",
                    text: "Your resume is not submited, please try again!",
                    icon: "error",
                    button: "Okay",
                });
            }
        });
    }
})

// FOR RESUME FILE UPLOAD

var upload_valid = false;
$("#upload_btn").click(function () {
    var files = $("#resume").get(0).files[0];
    var formData = new FormData();
    try {
        formData.append(files.name, files);

        $.ajax({
            type: "POST",
            url: '/Home/Upload',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                var size = parseFloat($("#resume")[0].files[0].size / 1024).toFixed(2);
                if (size >= 4000 && response == "False") {
                    swal({
                        title: "Error!",
                        text: "Your File is too large, please upload file of maximum 4Mb!",
                        icon: "error",
                        button: "Okay",
                    });
                }
                else {
                    swal({
                        title: "Uploaded!",
                        text: "Your File is uploaded successfully!",
                        icon: "success",
                        button: "Okay",
                    });
                }
                document.getElementById("resume_input").classList.remove("invalid_file");
                upload_valid = true;
            },
            error: function (error) {
                    swal({
                        title: "Error!",
                        text: "Your File is not uploaded, please try again!",
                        icon: "error",
                        button: "Okay",
                    });
                
                upload_valid = false;
            }
        });
    }
    catch (e) {
        swal({
            title: "Warning!",
            text: "Please browse the file!",
            icon: "warning",
            button: "Okay",
        });
    }

})