const bttn = document.getElementById("home");
const select = document.querySelector("select");
const api_key = "AJew0iea2U5YDshQdyhTqMJ4tlcbWZUa";
const message = document.querySelector("message");
const bubble2 = document.querySelector("bubble2");

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

function getRandom(arr) {
  const randomGif = arr[Math.floor(Math.random() * arr.length)];
  return randomGif;
}

const getData = async () => {
  const response = await axios.get(
    `http://www.boredapi.com/api/activity?type=${select.value}`
  );
  const response2 = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${select.value}&api_key=${api_key}&limit=20`
  );
  let oneGif = getRandom(response2.data.data);

  const post2 = document.querySelector(".bubble2");
  const post = document.querySelector(".sent");
  document.querySelector(".message").style.visibility = "visible";
  document.querySelector(".bubble2").style.visibility = "visible";
  post.innerHTML = `
    <p>${response.data.activity}</p>
    `;
  post2.innerHTML = `
    <img class=giphy src=${oneGif.images.original.url} />
    `;
};

bttn.addEventListener("click", getData);
