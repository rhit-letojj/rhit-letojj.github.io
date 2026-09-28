// Citation:
// The solution for not duplicating html for the ribbon and footer across pages
// was made with help from the solutions on a StackOverflow.com forum
// https://stackoverflow.com/questions/38837835/include-html-in-another-html-file

//some code was created with assistance from Claude LLM

function loadPartial(file, targetId) {
  return fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(targetId).innerHTML = html;
    });
}

function markCurrentPage() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#ribbon a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

loadPartial("./ribbon.html", "ribbon").then(markCurrentPage);
loadPartial("./footer.html", "footer");