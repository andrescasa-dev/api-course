export default function ColorColumn({hex}){
  return `<div class="color-column">
          <div style="background-color: ${hex.value} ;" class="pallet-color__color"></div>
          <span class="pallet-color__colorText">${hex.value}</span>
        </div>`
}