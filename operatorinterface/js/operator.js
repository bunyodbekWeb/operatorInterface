const modal = document.getElementById("modal");

const name = document.getElementById("name");
const email = document.getElementById("email");

const tbody = document.getElementById("tbody");
const saveBtn = document.getElementById("save");
const editBtn = document.getElementById("edit");
let id = 1;

function closes() {
  name.value = "";
  email.value = "";
  img.style.display = "none";
  editBtn.style.display = "none";
  saveBtn.style.display = "block";
  modal.style.display = "none";
}

const users = [
  {
    id: 1,
    name: "admin",
    email: "admin@gmail.com",
    image:
      "https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg",
  },
  {
    id: 2,
    name: "admin",
    email: "admin@gmail.com",
    image:
      "https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg",
  },
];

function loaded() {
  tbody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    tbody.innerHTML += `
            <tr>
            <th scope="row">${id++}</th>
            <td ><img  class='img_admin' src="${users[i].image}" alt="">
            <span class='onlyn'>online</span>
            </td>
            
            <td onclick="userInfo(${users[i].id})">${users[i].name}</td>
            <td>${users[i].email}</td>
            <td class="d-flex justify-space-around">
                <button class="btn btn-info" onclick="editUser(${users[i].id})">
                   <svg class="svg" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                </button>
                <button class="btn btn-danger" onclick="deleteUser(${users[i].id})">
                <i class="fa-solid fa-eye-slash"></i>
                </button>
            </td>
          </tr> 

         
            `;
  }

  let userrr = document.querySelector('.user_malumot'); 
  let immmg = document.querySelectorAll('.img_admin'); 
  let closeMalu = document.querySelector('.close_malumot')
  // console.log(closeMalu);
  // console.log(immmg);
  immmg.forEach((item, idx) => {
    item.addEventListener('click', () => {
      // console.log('salom');
      userrr.style.display = 'block'
      userrr.innerHTML = ''
      userrr.innerHTML +=
       `      
              <button type="submit" onclick="foo();"class ='close_malumot'>X</button>
              <div class="name">Name:${users[idx].name}</div>
              <div class="email">${users[idx].email}</div> 
              <div class="tell">Tell:<span>_ _ _</span></div> 
              <div >Country:<span>_ _ _</span></div> 
              <div >Adress:<span>_ _ _</span></div> 
      `
    })
  })
}

function foo(){
  document.querySelector('.user_malumot').style.display = "none";
}
let upload;
const img = document.getElementById("images");

function uploadImage(event) {
  const image = event.target.files[0];
  console.log();
  img.style.display = "block";
  const reader = new FileReader();
  reader.onload = (e) => {
    upload = e.target.result;
    img.setAttribute("src", upload);
  };

  reader.readAsDataURL(image);
}

function saveUser() {
  const user = {
    id: Date.now(),
    name: name.value,
    email: email.value,
    image: upload,
  };
  if (name.value != "" && email.value != "") {
    users.push(user);
  }
  name.value = "";
  email.value = "";
  img.style.display = "none";
  modal.style.display = "none";
  loaded();
}

function addNew() {
  modal.style.display = "block";
  editBtn.style.display = "none";
  saveBtn.style.display = "block";
}

function deleteUser(id) {
  let index;
  users.forEach((item) => {
    if (item.id == id) {
      // index = users.indexOf(item);
      alert("Деятельность приостановлена")
    }
  });
  // users.splice(index, 1);
  loaded();
  console.log(users);
}
let editUserId;
function editUser(id) {
  editUserId = id;

  modal.style.display = "block";
  img.style.display = "block";
  saveBtn.style.display = "none";
  editBtn.style.display = "block";

  users.forEach((item) => {
    if (item.id == id) {
      name.value = item.name;

      email.value = item.email;

      img.setAttribute("src", item.image);
    }
  });
}
function Edit() {
  console.log(editUserId);
  users.forEach((item) => {
    if (item.id == editUserId) {
      item.name = name.value;
      item.email = email.value;
      if (upload) {
        item.image = upload;
      }
    }
  });
  name.value = "";
  email.value = "";
  img.style.display = "none";
  modal.style.display = "none";
  loaded();
}


