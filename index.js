const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    // console.log(object);
  })
  .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
  });


function submitData(name, email) {
   const userData = {
        name: name,
        email: email,
   };

   const configureDataObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configureDataObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    let body = document.querySelector('body')
    let h1 = document.createElement('h1')
    h1.textContent = object.id
    body.appendChild(h1)
  })
  .catch(function (error) {
    alert("Error!");
    let body = document.querySelector('body')
    let h2 = document.createElement('h2')
    h2.textContent = error.message
    body.appendChild(h2)
  });

}
submitData('Logan', 'Email@email.com')