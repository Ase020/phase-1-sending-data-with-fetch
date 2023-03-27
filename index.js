// Add your code here
function submitData(name, email) {
   return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
      },
      body: JSON.stringify({
         name: name,
         email: email,
      }),
   })
      .then((res) => res.json())
      .then(({ id, name, email }) => (document.body.innerHTML = `<h1 id=${id}>${name}</h1> <p>${email}</p> <p>Id: <span>${id}</span></p>`))
      .catch((err) => (document.body.innerHTML = `<h2>${err.message}</h2>`));
}

// submitData("Steve", "steve@steve.com");
