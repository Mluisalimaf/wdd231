const courses = [
  { name: "WDD130", category: "WDD", credits: 1, completed: true },
  { name: "WDD131", category: "WDD", credits: 1, completed: false },
  { name: "WDD231", category: "WDD", credits: 1, completed: false },
  { name: "CSE110", category: "CSE", credits: 1, completed: true },
  { name: "CSE111", category: "CSE", credits: 1, completed: false },
  { name: "CSE210", category: "CSE", credits: 1, completed: false },
];

function displayCourses(filter = "All") {
  const courseContainer = document.querySelector(".course-list");
  courseContainer.innerHTML = "";

  const filteredCourses = courses.filter(course => filter === "All" || course.category === filter);

  filteredCourses.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course-item");
    if (course.completed) courseDiv.classList.add("completed");

    courseDiv.innerHTML = `
      <h3>${course.name}</h3>
      <p>Category: ${course.category}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? "Completed ✅" : "In Progress ⏳"}</p>
    `;

    courseContainer.appendChild(courseDiv);
  });

  const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById("totalCredits").textContent = total;
}

// ====== Filter ======
const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", () => {
  displayCourses(filterSelect.value);
});

displayCourses();

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuBtn.classList.toggle("active");
});


const lastModified = document.lastModified; 
document.getElementById('lastModified').textContent = "Last Modified: " + lastModified;