// Citation:
// The solution for not duplicating html for the ribbon and footer across pages
// was made with help from the solutions on a StackOverflow.com forum
// https://stackoverflow.com/questions/38837835/include-html-in-another-html-file

function fetchHtml() {
  fetch('./ribbon.html')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.getElementById("ribbon").innerHTML = html     
  });

  fetch('./footer.html')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.getElementById("footer").innerHTML = html     
  });
}

fetchHtml()