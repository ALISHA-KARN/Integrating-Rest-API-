function handleFormSubmit(event) {
    event.preventDefault();
    const passwordDetails = {
      title: event.target.title.value,
      password: event.target.password.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/48432301cefe457392e5e9f0484818ea/password",
        passwordDetails
      )
      .then((response) => {
        displayPasswordOnScreen(response.data);
        updatePasswordCount(1); // Increment password count
      })
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("title").value = "";
    document.getElementById("password").value = "";
  }
  
  let currentCount = 0; // Initialize current count
  
  function updatePasswordCount(count) {
      currentCount += count; // Update current count
      const passwordCount = document.getElementById("passwordcount");
      passwordCount.textContent = currentCount;
  }
  
  function searchPasswords() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const passwords = document.querySelectorAll("ul li");
    
    passwords.forEach(passwordItem => {
        const title = passwordItem.textContent.split(" - ")[0].toLowerCase();
        if (title.includes(searchInput)) {
            passwordItem.style.display = "block"; // Show the password if the title matches the search input
        } else {
            passwordItem.style.display = "none"; // Hide the password if the title does not match the search input
        }
    });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    axios
      .get(
        "https://crudcrud.com/api/48432301cefe457392e5e9f0484818ea/password"
      )
      .then((response) => {
        console.log(response);
        currentCount = response.data.length; // Initialize current count with the length of password array
        updatePasswordCount(currentCount); // Update password count with initial count
        response.data.forEach((passwordDetails) => {
          displayPasswordOnScreen(passwordDetails);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  function displayPasswordOnScreen(passwordDetails) {
    const passwordItem = document.createElement("li");
    passwordItem.appendChild(
      document.createTextNode(`${passwordDetails.title} - ${passwordDetails.password}`)
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    passwordItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    passwordItem.appendChild(editBtn);
  
    const passwordList = document.querySelector("ul");
    passwordList.appendChild(passwordItem);
  
    deleteBtn.addEventListener("click", function (event) {
      passwordList.removeChild(passwordItem);
      const userId = passwordDetails._id;
      axios
        .delete(
          `https://crudcrud.com/api/48432301cefe457392e5e9f0484818ea/password/${userId}`
        )
        .then((response) => {
          console.log(response);
          updatePasswordCount(-1); // Decrement password count
        })
        .catch((error) => {
          console.log(error);
        });
    });
  
    editBtn.addEventListener("click", function (event) {
      const updatedPasswordDetails = {
        title: passwordDetails.title,
        password: passwordDetails.password,
      };
  
      document.getElementById("title").value = passwordDetails.title;
      document.getElementById("password").value = passwordDetails.password;
  
      const form = document.querySelector("form");
      form.onsubmit = function (event) {
        event.preventDefault();
  
        updatedPasswordDetails.title = event.target.title.value;
        updatedPasswordDetails.password = event.target.password.value;
  
        const userId = passwordDetails._id;
  
        axios
          .put(
            `https://crudcrud.com/api/48432301cefe457392e5e9f0484818ea/${userId}`,
            updatedPasswordDetails
          )
          .then((response) => {
            console.log(response);
            passwordList.removeChild(passwordItem);
            displayPasswordOnScreen(updatedPasswordDetails);
          })
          .catch((error) => {
            console.log(error);
          });
  
        document.getElementById("title").value = "";
        document.getElementById("password").value = "";
      };
    });
  }
  