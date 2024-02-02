function savetolocalstorage(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const contact = event.target.contact.value;
  const email = event.target.email.value;

  const obj = {
    name,
    contact,
    email,
  };

  axios
    .post("http://localhost:3000/post_user", obj)
    .then((response) => {
      // console.log(response);
      console.log();
      showOnScreen(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}

function showOnScreen(obj) {
  const parentele = document.getElementById("listofitem");
  const childele = document.createElement("li");
  childele.textContent = obj.name + "-" + obj.contact + "-" + obj.email;
  parentele.appendChild(childele);

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "submit";
  deleteBtn.value = "Delete";
  deleteBtn.className = "delete-button"; // Add this line for styling
  childele.appendChild(deleteBtn);

  deleteBtn.onclick = () => {
    axios.delete(`http://localhost:3000/delete_user/${obj.id}`);
    localStorage.removeItem(obj.name);
    parentele.removeChild(childele);
  };

  const editBtn = document.createElement("input");
  editBtn.type = "submit";
  editBtn.value = "Edit";
  editBtn.className = "edit-button"; // Add this line for styling
  childele.appendChild(editBtn);

  editBtn.onclick = () => {
    document.getElementById("name").value = obj.name;
    document.getElementById("contact").value = obj.contact;
    document.getElementById("email").value = obj.email;
    axios.delete(`http://localhost:3000/delete_user/${obj.id}`);
    localStorage.removeItem(obj.name);
    parentele.removeChild(childele);
  };
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/get_user")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        showOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
