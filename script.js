
function validateForm() {
    let valid = true;
    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value;
    let language = document.getElementById('language').value.trim();
    let hoursPerWeek = document.getElementById('hoursPerWeek').value;

    clearErrors();

    if (!name || name.length < 3) {
        document.getElementById('nameError').textContent = "Name must be at least 3 characters long.";
        document.getElementById('name').style.borderColor = "red";
        valid = false;
    }

    if (!age || age < 18 || age > 100) {
        document.getElementById('ageError').textContent = "Age must be between 18 and 100.";
        document.getElementById('age').style.borderColor = "red";
        valid = false;
    }

    if (!language) {
        document.getElementById('languageError').textContent = "Please specify the language you're learning.";
        document.getElementById('language').style.borderColor = "red";
        valid = false;
    }

    if (!hoursPerWeek || hoursPerWeek < 1 || hoursPerWeek > 50) {
        document.getElementById('hoursError').textContent = "Hours per week must be between 1 and 50.";
        document.getElementById('hoursPerWeek').style.borderColor = "red";
        valid = false;
    }

    if (valid) {
        let totalLearningHours = calculateTotalLearningHours(hoursPerWeek);
        generateReport(name, age, language, totalLearningHours);
    }

    return valid;
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