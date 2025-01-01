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

//fetching image from api

async function fetchImage() {
  const response = await fetch("https://randomfox.ca/floof/");

  const data = await response.json();

  const wrangledData = data.image;
  return wrangledData;
}

const aboutDiv = document.getElementById("fetch");
function ImagePlace(imageurl) {
  const newImage = document.createElement("img");
  newImage.src = imageurl;
  newImage.alt = "random images generated using api fetch";
  newImage.className = "aboutImage";

  aboutDiv.appendChild(newImage);
}

async function display() {
  const displayImage = await fetchImage();

  ImagePlace(displayImage);
}
display();

//contact part

//contactDetails
const contactDetails = document.getElementById("contactDetails");

function addContactDetails() {
  const address = document.createElement("p");
  const addressIcon = document.createElement("i");
  addressIcon.classList.add("fa-solid", "fa-location-dot");
  address.appendChild(addressIcon);
  address.appendChild(document.createTextNode(" 20 christow street, le2 1gl"));
  // address.textContent = "20 christow street, le2 1gl";
  // this overwrites the entire content hence is best to use document.createTextNode() to append the text content after the icon has been added
  //This ensures that both the icon and the text appear correctly in each <p> element.

  const phone = document.createElement("p");
  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa", "fa-phone");
  phone.appendChild(phoneIcon);
  phone.appendChild(document.createTextNode(" +44 7234567891"));

  const email = document.createElement("p");
  const emailIcon = document.createElement("i");
  emailIcon.classList.add("fa", "fa-envelope");
  email.appendChild(emailIcon);
  email.appendChild(document.createTextNode(" project@gmail.com"));

  const github = document.createElement("p");
  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa-brands", "fa-github");
  github.appendChild(githubIcon);
  github.appendChild(document.createTextNode(" github.com"));

  contactDetails.appendChild(address);
  contactDetails.appendChild(phone);
  contactDetails.appendChild(email);
  contactDetails.appendChild(github);
}
addContactDetails();

//contactForm
//saving the form details to local storage
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", handleSubmit);

function handlebutton(event) {
  event.preventDefault();

  const formObject = new FormData(contactForm);
  const dataInput = Object.fromEntries(formObject);
  console.log(dataInput);
  alert("data sent successfully");
}
