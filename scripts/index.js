let score = 75;
let has_submitted_assignments = true;

let grade;
let status;

if (score >= 0 && score <= 100) {
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (score >= 60) {
        if (has_submitted_assignments) {
            status = "Passed with all homework submitted.";
        } else {
            status = "Passed, but missing homework penalty applies.";
        }
    } else {
        if (score > 50) {
            status = "Failed, but eligible for a re-test.";
        } else {
            status = "Failed completely. Must retake the course.";
        }
    }
} else {
    status = "Wrong number";
}

console.log("Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);