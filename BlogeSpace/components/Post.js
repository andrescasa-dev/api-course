export default function Post({title, body, image_url}){
  return `
<div class='post'>
  <div class='post__img' style="background-image:url('${image_url}')"></div>
  <div>
    <h2>${title}</h2>
    <p class='post__description'>${body}</p>
  </div>
</div>`
}