// Citation:
// The solution for not duplicating html for the ribbon and footer across pages
// was made with help from the solutions on a StackOverflow.com forum
// https://stackoverflow.com/questions/38837835/include-html-in-another-html-file

// some code was created with assistance from Claude LLM

async function loadPartial(file, targetId) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    document.getElementById(targetId).innerHTML = await response.text();
  } catch (err) {
    console.error(`Could not load ${file}:`, err);
  }
}

// Works for index.html, /index.html, and the extensionless URLs GitHub Pages serves
const pageName = (path) => (path.split("/").pop() || "index").replace(/\.html$/, "");

function markCurrentPage() {
  const current = pageName(location.pathname);
  document.querySelectorAll("#ribbon a:not(.brand)").forEach((link) => {
    if (pageName(link.getAttribute("href")) === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

loadPartial("./ribbon.html", "ribbon").then(markCurrentPage);
loadPartial("./footer.html", "footer").then(setYear);
