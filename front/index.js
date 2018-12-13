const API_URL = "http://localhost:8888";
const PUBLIC_ENDPOINT = "/headline";
const PRIVATE_ENDPOINT = "/protected/headline";

const headlineBtn = document.querySelector("#headline");
const secretBtn = document.querySelector("#secret");
const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");

headlineBtn.addEventListener("click", () => {
  fetcher(`${API_URL}${PUBLIC_ENDPOINT}`);
});

secretBtn.addEventListener("click", (event) => {
  fetcher(`${API_URL}${PRIVATE_ENDPOINT}`);
});

logoutBtn.addEventListener("click", (event) => {
  auth.logout();
  UIUpdate.loggedOut();
});

loginBtn.addEventListener("click", (event) => {
  auth.login();
});

//Set the initial cat (in case we're offline)
UIUpdate.updateCat(200);