
function validateForm(event) {
    event.preventDefault();

    let valid = true;
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value;
    let language = document.getElementById('language').value.trim().toLowerCase();
    let hoursPerWeek = document.getElementById('hoursPerWeek').value;

    clearErrors();

    if (!name || name.length < 3) {
        document.getElementById('nameError').textContent = "Name must be at least 3 characters long.";
        document.getElementById('name').style.borderColor = "red";
        valid = false;
    }

    if (!age || age < 12 || age > 100) {
        document.getElementById('ageError').textContent = "Age must be between 12 and 100.";
        document.getElementById('age').style.borderColor = "red";
        valid = false;
    }

    if (!language) {
        document.getElementById('languageError').textContent = "Please specify the language you're learning.";
        document.getElementById('language').style.borderColor = "red";
        valid = false;
    }

    if (!hoursPerWeek || hoursPerWeek < 1 || hoursPerWeek > 100) {
        document.getElementById('hoursError').textContent = "Hours per week must be between 1 and 100.";
        document.getElementById('hoursPerWeek').style.borderColor = "red";
        valid = false;
    }

    if (valid) {
        recommendCourse(language, hoursPerWeek);
    }

    return flase;
}

function clearErrors() {
    document.getElementById('nameError').textContent = "";
    document.getElementById('ageError').textContent = "";
    document.getElementById('languageError').textContent = "";
    document.getElementById('hoursError').textContent = "";

    document.getElementById('name').style.borderColor = "";
    document.getElementById('age').style.borderColor = "";
    document.getElementById('language').style.borderColor = "";
    document.getElementById('hoursPerWeek').style.borderColor = "";
}

function recommendCourse(language, hoursPerWeek) {
    let report = document.getElementById('report');
    let recommendedCourse;

    if (hoursPerWeek <= 5) {
        recommendedCourse = `${capitalize(language)} Introduction`;
    } else if (hoursPerWeek <= 20) {
        recommendedCourse = `${capitalize(language)} Intermediate`;
    } else {
        recommendedCourse = `${capitalize(language)} Advanced`;
    }

    report.value = `Based on your input, we recommend the "${recommendedCourse}" course. Happy learning!`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}