//test fetch et fetch post

const id = document.querySelector("#id");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const language = document.querySelector("#language");

fetch("http://localhost:5000/api/users")
  .then((res) => res.json())

  .then((data) => {
    id.innerHTML = data[0].id;
    firstName.innerHTML = data[0].firstname;
    lastName.innerHTML = data[0].lastname;
    email.innerHTML = data[0].email;
    city.innerHTML = data[0].city;
    language.innerHTML = data[0].language;
  });

const test = JSON.stringify({
  firstname: "Ric",
  lastname: "leBGdu4",
  email: "suceurwildc",
  city: "Nante",
  language: "Gues",
});

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: test,
};
fetch("http://localhost:5000/api/users", requestOptions)
  .then((response) => response.json())
  .then((data) => console.log(data));
