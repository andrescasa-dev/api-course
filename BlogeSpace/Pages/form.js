import view from "../utils/view.js"
import Post from "../components/Post.js"
import { BaseURL } from "../utils/consts.js"

const formElement = document.querySelector('#form')

export default function form(){
  const newPost = {
    title: formElement.querySelector('#title').value,
    body: formElement.querySelector('#content').value,
  }

  view.innerHTML += Post(newPost);
}

async function postNewPost(){
  await fetch(`${BaseURL}/todos`,{method: "POST", body: JSON.stringify(newPost) })
}