document.addEventListener('DOMContentLoaded', () => {
    const enrollmentForm = document.getElementById('enrollment-form');
    const facultyForm = document.getElementById('faculty-form');
    const generateReportButton = document.getElementById('generate-report');
    const profileForm = document.getElementById('profile-form');
    const loginForm = document.getElementById('login-form');
    const loginLink = document.getElementById('login-link');
    const loginSection = document.getElementById('login');

    // Handle student enrollment form submission
    enrollmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('student-name').value;
        const studentId = document.getElementById('student-id').value;
        const course = document.getElementById('course').value;
        alert(`Student ${name} with ID ${studentId} enrolled in ${course}.`);
    });

    // Handle faculty addition form submission
    facultyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const facultyName = document.getElementById('faculty-name').value;
        const facultyId = document.getElementById('faculty-id').value;
        const assignedCourse = document.getElementById('assigned-course').value;
        alert(`Faculty ${facultyName} with ID ${facultyId} added to ${assignedCourse}.`);
    });

    // Handle report generation
    generateReportButton.addEventListener('click', () => {
        const reportResult = document.getElementById('report-result');
        reportResult.innerHTML = '<p>Report generated successfully!</p>';
    });

    // Handle profile update
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const profileName = document.getElementById('profile-name').value;
        const profileEmail = document.getElementById('profile-email').value;
        alert(`Profile updated: ${profileName}, ${profileEmail}.`);
    });

    // Handle login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;
        alert(`Logged in with email: ${loginEmail}.`);
        // Simulate successful login
        loginSection.style.display = 'none';  // Corrected this line as well
    });
});
