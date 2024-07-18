document.getElementById("searchBtn").addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput");
  searchInput.classList.toggle("expanded");
  if (searchInput.classList.contains("expanded")) {
    searchInput.focus();
  }
});
