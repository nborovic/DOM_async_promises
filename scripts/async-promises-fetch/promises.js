setTimeout(() => {
  console.log("This will execute after 2000 miliseconds");
}, 2000);

setInterval(() => {
  console.log("This executes every 1000 miliseconds");
}, 1000);

console.log("This will execute immediately");

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) resolve("Promise 1: Resolved after 3000 miliseconds");
    else reject("Promise 1: Rejected after 3000 miliseconds");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) resolve("Promise2: Resolved after 3000 miliseconds");
    else reject("Promise 2: Rejected after 3000 miliseconds");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) resolve("Promise 3: Resolved after 3000 miliseconds");
    else reject("Promise 3: Rejected after 3000 miliseconds");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((errors) => console.log(errors))
  .finally(() => console.log("Promise 1-3: Finally"));

(async function asyncFunction() {
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) resolve("Promise 4: Resolved after 3000 miliseconds");
      else reject("Promise 4: Rejected after 3000 miliseconds");
    }, 3000);
  });
  try {
    const data = await promise4;
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise 4: Finally");
  }
})();
