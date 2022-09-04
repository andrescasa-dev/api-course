import view from "../utils/view.js"
import Post from "../components/Post.js"
import { BaseURL } from "../utils/consts.js"

const formElement = document.querySelector('#form')

export default async function form(){
  const newPost = {
    title: formElement.querySelector('#title').value,
    body: formElement.querySelector('#content').value,
  }
  formElement.reset();

  postNewPost(newPost);
  view.innerHTML += Post(newPost);
}

async function postNewPost(post){
  const response = await fetch(`${BaseURL}/posts`,{
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  console.log('post finished')
  console.log(data)
  return data
}