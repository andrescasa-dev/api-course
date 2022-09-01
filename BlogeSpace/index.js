const BaseURL = 'https://apis.scrimba.com/jsonplaceholder';
const mount = document.querySelector('#mount');
const POST_NUMBER = 10;

async function fetchPosts(){
  const response = await fetch(`${BaseURL}/posts`);
  const data = await response.json();
  return data.slice(0, POST_NUMBER); 
}

/**
 * @returns [{image},{image}]
 */
async function fetchImages(){
  const response = await fetch(`https://picsum.photos/v2/list?limit=${POST_NUMBER}`)
  return data = await response.json();
}

async function renderPost(){
  const posts = await fetchPosts();
  const images = await fetchImages();
  let i = 0;
  const postsHTML = posts.reduce((html, post)=>{
    return html+`
    <div class='post'>
      <div class='post__img' style="background-image:url('${images[i++].download_url}')"></div>
      <div >
        <h2>${post.title}</h2>
        <p class='post__description'>${post.body}</p>
      </div>
    </div>`
  },'');
  mount.innerHTML = postsHTML
}

renderPost();