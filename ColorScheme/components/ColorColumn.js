export default function ColorColumn({hex}){
  return `<div class="color-column">
          <div style="background-color: ${hex.value} ;" class="pallet-color__color"></div>
          <input type="text" id="colorText" class="pallet-color__colorText" readonly value='${hex.value}'>
        </div>`
}