const cards = document.querySelector('.boxes')

let favUsers = JSON.parse(localStorage.getItem('fav-users'))

function getLocalFavUser() {
  cards.innerHTML = ''
  favUsers.forEach((user) => {
    cards.innerHTML += `
        <div class="card" style="width:14rem;">
        <img class="card-img-top" src=${user.photo} alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title">${user.name} ${user.surname}</h5>
          <hr>
          <p class="card-text">${user.email}</p>
          <p class="card-text">${user.date}</p>
          <a href="#" onclick=removeLocal('${user.id}') class="btn btn-primary">Remove fav</a>
        </div>
        </div>
  `
  })
}

getLocalFavUser()