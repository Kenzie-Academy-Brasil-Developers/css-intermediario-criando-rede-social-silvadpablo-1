/* Desenvolva a lógica da página aqui */

let main = document.querySelector("main")

function createModal (id) {
  
  let modalWrap = document.createElement("div")
  modalWrap.classList = "modal-wrap"
  
  let modalContainer = document.createElement("div")
  modalContainer.classList = "modal-container"

  createUserCard(id)

  let idFull = event.target.id
  let idNumber = idFull.charAt(idFull.length - 1)
  
  let divContent = document.createElement("div")
  divContent.classList = "modal-content"

  let h2 = document.createElement("h2")
  let h2Elem = document.getElementById(`post-title${idNumber}`)
  h2.classList = "title-1"
  h2.innerText = h2Elem.innerText

  let p = document.createElement("p")
  let textElem = document.getElementById(`post-text${idNumber}`)
  p.classList = "text-1"
  p.innerText = textElem.innerText

  let button = document.createElement("button")
  button.classList = "modal-button"
  button.id = "close-modal"
  button.innerText = "X"

  main.appendChild(modalWrap)
  modalWrap.appendChild(modalContainer)
  modalContainer.appendChild(userCard)
  modalContainer.appendChild(divContent)
  divContent.appendChild(h2)
  divContent.appendChild(p)
  modalContainer.appendChild(button) 
}

//Posts and Users functions

let sectionPosts = document.querySelector("#section-posts")
let suggestions = document.querySelector("#suggested-cards")

//finds a user using an ID
function getUser (idUser) {
  for (let index = 0; index < users.length; index++) {
    if (idUser === users[index].id){
      return users[index]
    }
  }
}

//updates likes count when clicked
function updateLike (id) {
  let likes = document.getElementById(`like${id}`)
  let likesCount = document.getElementById(`like-count${id}`)
  for (let index = 0; index < posts.length; index++){
    if (likes.id.charAt(likes.id.length - 1) == posts[index].id_post){
      if (likes.classList == "fa fa-heart"){
        posts[index].likes++
        likesCount.innerText = posts[index].likes
      } else {
        posts[index].likes--
        likesCount.innerText = posts[index].likes
      }
    }
  }
}

//finds a user and creates their img, name and job div
function createUserCard (idUser) {

  let div1 = document.createElement("div")
  div1.classList = "flex post-user"
  
  let figure = document.createElement("figure")
  let img = document.createElement("img")
  
  let user = getUser(idUser)
  img.classList = "user-img"
  img.src = user.img
  img.alt = user.user
  div1.id = `user${user.id}`
  
  let div2 =  document.createElement("div")
  let pName = document.createElement("p")
  pName.classList = "user-name"
  pName.innerText = user.user
  let pJob = document.createElement("p")
  pJob.classList = "user-job"
  pJob.innerText = user.stack

  div1.appendChild(figure)
  figure.appendChild(img)
  div1.appendChild(div2)
  div2.appendChild(pName)
  div2.appendChild(pJob)

  return userCard = div1
}

//creates the suggested sitcky side bar
function createSuggestedUsers (array) {
  for (let index = 0; index < array.length; index++){
    let idUser = array[index]
    createUserCard(idUser)

    let cardDiv = document.createElement("div")
    cardDiv.classList = "flex justify-between"
    cardDiv.id = "suggested-card"
    let button = document.createElement("button")
    button.classList = "btn btn-outline"
    button.innerText = "Seguir"
    button.addEventListener("click", () => {
      button.classList.toggle("btn-following")
      if (button.innerText == "Seguir"){
        button.innerText = "Seguindo"
      } else {
        button.innerText = "Seguir"
      }
    })

    suggestions.appendChild(cardDiv)
    userCard.id = ""
    userCard.classList = "flex"
    cardDiv.appendChild(userCard)
    cardDiv.appendChild(button)

  }
}

createSuggestedUsers(sugestUsers)


//creates the title, text and button of the post
function createPosts (object) {
  for (let index = 0; index < object.length; index++){
    let idUser = object[index].user
    
    createUserCard(idUser)

    let div3 = document.createElement("div")
    div3.classList = "post-text"
    div3.id = `post${object[index].id_post}`
    let h2 = document.createElement("h2")
    h2.classList = "post-title title-1"
    h2.innerText = object[index].title
    h2.id = `post-title${object[index].id_post}`

    let pText = document.createElement("p")
    pText.classList = "post-text text-1"
    pText.innerText = object[index].text
    pText.id = `post-text${object[index].id_post}`
    
    let div4 = document.createElement("div")
    div4.classList = "flex"
    let buttonPost = document.createElement("button")
    buttonPost.classList = "btn btn-grey1"
    buttonPost.innerText = "Abrir post"
    buttonPost.id = `post-button${object[index].id_post}`

    buttonPost.addEventListener("click", () => {
      let modal = createModal(idUser)
      closeModal()
    })

    let div5 = document.createElement("div")
    div5.classList = "flex"
    
    let pLikes = document.createElement("p")
    pLikes.classList = "p-likes"
    pLikes.id = `like-count${object[index].id_post}`
    pLikes.innerText = `${object[index].likes}`

    let icon = document.createElement("i")
    icon.id = `like${object[index].id_post}`
    icon.classList = "fa fa-heart fa-heart-disabled"
    icon.addEventListener("click", () => {
      icon.classList.toggle("fa-heart-disabled")
      updateLike(object[index].id_post)
    })

    
    sectionPosts.appendChild(userCard)
    sectionPosts.appendChild(div3)
    div3.appendChild(h2)
    div3.appendChild(pText)
    sectionPosts.appendChild(div4)
    div4.appendChild(buttonPost)
    div4.appendChild(div5)
    div5.appendChild(icon)
    div5.appendChild(pLikes)
  }
}

function closeModal(){
  let close = document.querySelector("#close-modal")
  let modal = document.querySelector(".modal-wrap")
  close.addEventListener("click", () => {
    modal.remove()
  })
}

createPosts(posts)

let postTitle = document.getElementById("input-title")
let postText = document.getElementById("input-text")
let postButton = document.getElementById("post-button")
let userImg = document.getElementById("posting-user")
let userName = document.getElementById("posting-user-name")
let userJob = document.getElementById("posting-user-job")

function createUserPost (userName) {
  postButton.addEventListener("click", () => {
    //this part is hardcoded since there's no user login logic yet
    getUserByName(userName)
    createUserCard(user)

    let secondElement = document.querySelector(`#section-posts :nth-child(3)`)
    let elementId = secondElement.id.charAt(secondElement.id.length - 1)
    
    let post = sectionPosts.lastElementChild.firstElementChild.id
    let postId = 0
    
    if (elementId == 1) {
      postId = post.charAt(post.length - 1)
    } else {
      postId = elementId
    }

    
    let div3 = document.createElement("div")
    div3.classList = "post-text"
    div3.id = `post${Number(postId) + 1}`
    let h2 = document.createElement("h2")
    h2.classList = "post-title title-1"
    h2.innerText = postTitle.value
    h2.id = `post-title${Number(postId) + 1}`

    let pText = document.createElement("p")
    pText.classList = "post-text text-1"
    pText.innerText = postText.value
    pText.id = `post-text${Number(postId) + 1}`
    
    let div4 = document.createElement("div")
    div4.classList = "flex"
    let buttonPost = document.createElement("button")
    buttonPost.classList = "btn btn-grey1"
    buttonPost.innerText = "Abrir post"
    buttonPost.id = `post-button${Number(postId) + 1}`

    buttonPost.addEventListener("click", () => {
      let modal = createModal(user)
      closeModal()
    })

    let div5 = document.createElement("div")
    div5.classList = "flex"
    
    let pLikes = document.createElement("p")
    pLikes.classList = "p-likes"
    pLikes.id = `like-count${Number(postId) + 1}`
    pLikes.innerText = `0`

    let icon = document.createElement("i")
    icon.id = `like${Number(postId) + 1}`
    icon.classList = "fa fa-heart fa-heart-disabled"
    icon.addEventListener("click", () => {
      icon.classList.toggle("fa-heart-disabled")
      updateLike(Number(postId) + 1)
    })

    
    sectionPosts.firstElementChild.insertAdjacentElement("afterend", div4)
    sectionPosts.firstElementChild.insertAdjacentElement("afterend", div3)
    sectionPosts.firstElementChild.insertAdjacentElement("afterend", userCard)
    div3.appendChild(h2)
    div3.appendChild(pText)
    div4.appendChild(buttonPost)
    div4.appendChild(div5)
    div5.appendChild(icon)
    div5.appendChild(pLikes)

    postTitle.value = ""
    postText.value = ""
    posts.push({id_post: Number(postId) + 1, user: user, title: h2.innerText, text: pText.innerText, likes: 0,})
  })
}

function getUserByName(userName) {
  for (let index = 0; index < users.length; index++) {
    if (userName.innerText === users[index].user){
      return user = users[index].id
    }
  }
}

createUserPost(userName)