const bttn = document.getElementById("home");
const select = document.querySelector("select");
const api_key = "AJew0iea2U5YDshQdyhTqMJ4tlcbWZUa";

const type = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork"
];
type.forEach(function(element) {
  select.innerHTML += `<option value=${element}>${element}</option>`;
});

const getData = async () => {
  const response = await axios.get(
    `http://www.boredapi.com/api/activity?type=${select.value}`
  );
  const response2 = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${select.value}&api_key=${api_key}&limit=1`
  );
  console.log(response2.data.data[0].url);
  const post2 = document.querySelector(".bubble2");
  const post = document.querySelector(".sent");
  post.innerHTML = `
    <p>${response.data.activity}</p>
    `;
  post2.innerHTML = `
    <img class=giphy src=${response2.data.data[0].url} />
    `;
};

bttn.addEventListener("click", getData);
