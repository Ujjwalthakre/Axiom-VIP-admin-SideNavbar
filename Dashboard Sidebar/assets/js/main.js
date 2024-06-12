const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    listItems.forEach((el) => {
      el.classList.remove("active");
    });

    if (isActive) item.classList.remove("active");
    else item.classList.add("active");
  });
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

function handleResize() {
  if (window.innerWidth < 600) {
    // Small screens
    sidebar.classList.add("close");
    toggleSidebar.style.display = "none";
  } else {
    // Medium and Large screens
    sidebar.classList.remove("close");
    toggleSidebar.style.display = "block";
  }
}

function toggleSidebarFunction() {
  sidebar.classList.toggle("close");
}

toggleSidebar.addEventListener("click", toggleSidebarFunction);
logo.addEventListener("click", toggleSidebarFunction);

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
