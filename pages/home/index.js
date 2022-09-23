/* Desenvolva a lógica da página aqui */

{/* <div class="modal-wrap">
<div class="modal-container">
  <div class="flex">
    <figure>
      <img class="user-img" src="../../assets/img/user1.svg" alt="">
    </figure>
    <div>
      <p class="user-name">Nome usuario</p>
      <p class="user-job">profissão</p>
    </div>
  </div>
  <div class="modal-content">
    <h2 class="title-1">Titulo do post</h2>
    <p class="text-1">post</p>
  </div>
  <button class="modal-button">X</button>
</div>
</div> */}

let main = document.querySelector("main")

function createModal () {
    let modalWrap = document.createElement("div")
    modalWrap.classList = "modal-wrap"
    
    let modalContainer = document.createElement("div")
    modalContainer.classList = "modal-container"

    let div1 = document.createElement("div")
    div1.classList = "flex"

    let figure = document.createElement("figure")
    let img = document.createElement("img")
    img.classList = "user-img"
    
}

        // <div class="flex">
        //   <figure>
        //     <img class="user-img" src="../../assets/img/user1.svg" alt="">
        //   </figure>
        //   <div>
        //     <p class="user-name">Nome usuario</p>
        //     <p class="user-job">profissão</p>
        //   </div>
        // </div>
        // <div>
        //   <h2 class="title-1">Titulo do post</h2>
        //   <p class="text-1">post</p>
        // </div>
        // <div>
        //   <button class="btn btn-grey1">Abrir Post</button>
        //   <i class="fa fa-heart">#curtidas</i>
        // </div>

function getUser (idUser) {
  for (let index = 0; index < users.length; index++) {
    if (idUser === users[index].id){
      return users[index]
    }
  }
}

{/* <div id="post-user" class="flex">
          <figure>
            <img class="user-img" src="../../assets/img/user1.svg" alt="">
          </figure>
          <div>
            <p class="user-name">Nome usuario</p>
            <p class="user-job">profissão</p>
          </div>
        </div> */}

// function createUserCard (user) {
//   for (let index = 0; index < users.length; index++){

//   }
// }

let sectionPosts = document.querySelector("#section-posts")

function createPosts (object) {
  for (let index = 0; index < object.length; index++){
    let idUser = object[index].user
    
    let div1 = document.createElement("div")
    div1.classList = "flex"
    div1.id = "post-user"
    
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    
    let user = getUser(idUser)
    img.classList = "user-img"
    img.src = user.img
    img.alt = user.user
    
    let div2 =  document.createElement("div")
    let pName = document.createElement("p")
    pName.classList = "user-name"
    pName.innerText = user.user
    let pJob = document.createElement("p")
    pJob.classList = "user-job"
    pJob.innerText = user.stack

    let div3 = document.createElement("div")
    div3.classList = "post-text"
    let h2 = document.createElement("h2")
    h2.classList = "post-title title-1"
    h2.innerText = object[index].title

    let pText = document.createElement("p")
    pText.classList = "post-text text-1"
    pText.innerText = object[index].text
    
    let div4 = document.createElement("div")
    div4.classList = "flex"
    let buttonPost = document.createElement("button")
    buttonPost.classList = "btn btn-grey1"
    buttonPost.innerText = "Abrir post"

    let div5 = document.createElement("div")
    div5.classList = "flex"

    let icon = document.createElement("i")
    icon.classList = "fa fa-heart"

    let pLikes = document.createElement("p")
    pLikes.classList = "p-likes"
    pLikes.innerText = `${object[index].likes}`
    
    sectionPosts.appendChild(div1)
    div1.appendChild(figure)
    figure.appendChild(img)
    div1.appendChild(div2)
    div2.appendChild(pName)
    div2.appendChild(pJob)
    sectionPosts.appendChild(div3)
    div3.appendChild(h2)
    div3.appendChild(pText)
    sectionPosts.appendChild(div4)
    div4.appendChild(buttonPost)
    div4.appendChild(div5)
    div5.appendChild(icon)
    div5.appendChild(pLikes)
    console.log(sectionPosts)
    
  }
}

createPosts(posts)

