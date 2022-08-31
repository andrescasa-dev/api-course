const BaseURL = 'https://apis.scrimba.com/jsonplaceholder';
const mount = document.querySelector('#mount');

async function fetchPosts(){
  const response = await fetch(`${BaseURL}/posts`);
  const data = await response.json();
  return data.slice(0, 5); 
}

fetchPosts().then(posts => {
  const postsHTML = posts.reduce((html, post)=>{
    return html+`
    <div class='post'>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>`
  },'');
  mount.innerHTML = postsHTML
});