const url = "https://randomuser.me/api/";

fetch(`${url}?results=10&page=2&seed=abc`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    else return res.json();
  })
  .then((data) => {
    localStorage.setItem("fetched-values", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("fetched-values")));
  })
  .catch((err) => console.log(err));

fetch(`${url}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify("hello"),
})
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    else return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
