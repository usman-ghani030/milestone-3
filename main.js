var _a;
//listing element
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n\n\n<p> <strong>Name:</strong> ").concat(name_1, "</p>\n<p> <strong>Email:</strong> ").concat(email, "</p>\n<p> <strong>Phone Number:</strong> ").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</P>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</P>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</P>\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('One or more output elements are missing');
    }
});
