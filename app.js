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

const contactDetails = document.getElementById("contactDetails");

function addContactDetails() {
  const address = document.createElement("p");

  address.textContent = "20 christow street, le2 1gl";
  const phone = document.createElement("p");
  phone.textContent = "+44 7234567891";
  const email = document.createElement("p");
  email.textContent = "project@gmail.com";

  contactDetails.appendChild(address);
  contactDetails.appendChild(phone);
  contactDetails.appendChild(email);
}
addContactDetails();
