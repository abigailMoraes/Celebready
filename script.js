var existing = localStorage.getItem("breadsjsonstring");
var breadsjsonstring = existing
  ? existing
  : '[{"name":"Wheatney Houston","description":"Nutritious 6 grain whole wheat loaf, one grain per every Whitney Grammy. Classy and timeless.","price":"9.40","image":"assets/wheatneyhouston.jpg"},{"name":"Breadley Cooper","description":"Classic artisan no knead bread.","price":"6.40","image":"assets/breadleycooper.jpg"},{"name":"Pita Dinklage","description":"Introducing the Pita Dinklage a small but mighty burst of flavor that will leave you amazed! Inspired by the iconic actor, Peter Dinklage, this pita is as impressive as its namesake.","price":"3.40","image":"assets/pitadinklage.jpg"}]';
let breads = JSON.parse(breadsjsonstring);

// rendering breads
renderBreads(breads);

// clears each bread/item with their information and images temporarily
function clearBreads() {
  document.getElementById("products").innerHTML = "";
}

// clearing breads in response to clear button click, only clears temporarily
document.getElementById("clearButton").addEventListener("click", clearBreads);

// render each bread/item with their information and images
function renderBreads(breads) {
  let output = "";

  for (let bread of breads) {
    output += `<div class="bread">
                <img src="${bread.image}" alt="${bread.image}" width="60px" height="80px"></img>
                    <p class="title">${bread.name}</p>
                    <p class="description">${bread.description}</p>
                    <p class="price">
                    <span>${bread.price}</span>
                    <span>CAD</span>
                    </p>
            </div>
            `;
  }
  document.querySelector(".breads").innerHTML = output;
}

// adds new breads/items and persists them to a json string stored in localstorage
form.onsubmit = (event) => {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  breads.push(formDataObj);
  localStorage.setItem("breadsjsonstring", JSON.stringify(breads));
  renderBreads(breads);
};

// filter by keywords that appear in the name or description of the breads/items
function search() {
  input = document.getElementById("searchterm");
  searchbreads = breads.filter(
    (bread) =>
      bread.name.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ||
      bread.description.toLowerCase().indexOf(input.value.toLowerCase()) > -1
  );
  renderBreads(searchbreads);
}

// sending an email with elastic email service
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abigail.theresa.moraes@gmail.com",
    Password: "DA59B4270A6F82AD1B76C85382ECD5C4CE3B",
    From: "abigail.theresa.moraes@gmail.com",
    To: "abigail.theresa.moraes@gmail.com",
    Subject: "Bakery Enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

// handling the navbar open-close functionality for mobile views
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closebutton = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (closebutton) {
  closebutton.addEventListener("click", (e) => {
    nav.classList.remove("active");
    e.preventDefault();
  });
}
