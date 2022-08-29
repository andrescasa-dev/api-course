const p_activity = document.querySelector('#activity');
const btn = document.querySelector('#btn_find')

async function getActivity(){
  const response = await fetch("https://apis.scrimba.com/bored/api/activity");
  const data = await response.json();
  return data.activity;
}

btn.addEventListener('click', async ()=>{
  const activity = await getActivity();
  p_activity.textContent = activity;
})

