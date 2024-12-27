//select dom
const dropdownmenu = document.getElementById("myDropdown");

function handlebutton() {
  dropdownmenu.classList.toggle("show");
}
// Closing the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowncontent = document.getElementsByClassName("dropContent");
    for (let i = 0; i <= dropdowncontent.length; i++) {
      let opendropdown = dropdowncontent[i];
      if (opendropdown.classList.contains("show")) {
        opendropdown.classList.remove("show");
      }
    }
  }
};
