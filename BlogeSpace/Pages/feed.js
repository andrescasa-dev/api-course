import view from "../utils/view.js";
import Post from "../components/Post.js";
import { BaseURL } from "../utils/consts.js";

const POST_QUANTITY = 10;

export default async function feed(){
  const posts = await fetchPosts(POST_QUANTITY);
  const images = await fetchImages(POST_QUANTITY);
  view.innerHTML = posts.map((post, i) => { return Post({...post, image_url: images[i].download_url})}).join('');
}

async function fetchPosts(limit){
  const response = await fetch(`${BaseURL}/posts`);
  const data = await response.json();
  return data.slice(0, limit); 
}

/**
 * @returns [{image},{image}]
 */
async function fetchImages(limit){
  const response = await fetch(`https://picsum.photos/v2/list?limit=${limit}`)
  const data = await response.json();
  return data;
}

