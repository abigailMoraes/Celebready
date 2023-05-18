let breads = [
  {
    name: "Wheatney Houston",
    description:
      "Nutritious 6 grain whole wheat loaf, one grain per every Whitney Grammy. Classy and timeless.",
    price: "9.40",
    image: "assets/wheatneyhouston.jpg",
  },
  {
    name: "Breadley Cooper",
    description: "Classic artisan no knead bread.",
    price: "6.40",
    image: "assets/breadleycooper.jpg",
  },
  {
    name: "Pita Dinklage",
    description:
      "Introducing the Pita Dinklage a small but mighty burst of flavor that will leave you amazed! Inspired by the iconic actor, Peter Dinklage, this pita is as impressive as its namesake.",
    price: "3.40",
    image: "assets/pitadinklage.jpg",
  },
];

renderBreads(breads);

function clearBreads() {
  console.log("clearing breads");
  document.getElementById("products").innerHTML = "";
}

document.getElementById("clearButton").addEventListener("click", clearBreads);

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

form.onsubmit = (event) => {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
  breads.push(formDataObj);
  renderBreads(breads);
  console.log(breads);
};

function search() {
  input = document.getElementById("searchterm");
  console.log(input.value);
  searchbreads = breads.filter(
    (bread) =>
      bread.name.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ||
      bread.description.toLowerCase().indexOf(input.value.toLowerCase()) > -1
  );
  renderBreads(searchbreads);
}

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

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closebutton = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    console.log(nav.classList.contains("active"));
    console.log("in add event listener");
  });
  console.log(closebutton);
}

if (closebutton) {
  closebutton.addEventListener("click", (e) => {
    nav.classList.remove("active");
    e.preventDefault();
  });
}
