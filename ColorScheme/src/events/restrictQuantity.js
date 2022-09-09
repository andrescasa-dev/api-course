export default function restrictQuantity(event){
  const quantity = event.target.valueAsNumber;  
  if(quantity > event.target.max) event.target.value = event.target.max;
}

