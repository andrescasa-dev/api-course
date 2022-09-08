
import { BASE_URL, MOUNT } from "../../utils/constants.js"
import ColorColumn from "../../components/ColorColumn.js";

export default async function buttonHandler(){
  const seed = document.querySelector('#color-picker').value;
  const mode = document.querySelector('#mode').value
  const quantity = document.querySelector('#colorQuantity').value
  const scheme = await getScheme(seed, mode, quantity);
  MOUNT.innerHTML = scheme.colors.map(color => ColorColumn(color)).join('');
}

async function getScheme(seed, mode, quantity){
  const response = await fetch(`${BASE_URL}/scheme/?hex=${seed.replace('#','')}&mode=${mode}&count=${quantity || 5}`);
  const data = await response.json();
  return data;
}


