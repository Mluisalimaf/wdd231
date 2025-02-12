/*hello world*/


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModified;




function showCourseDetails(courseName) {
    // Customize the details based on the course name
    var detailsText = document.getElementById('details-text');
    detailsText.textContent = "Details for " + courseName + " will be shown here.";
    
    // Show the dialog
    var dialog = document.getElementById('course-details');
    dialog.showModal();
}

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

courseDiv.addEventListener('click', () => {
      displayCourseDetails(course);
    });