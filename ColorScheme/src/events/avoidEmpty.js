export default function avoidEmpty(event){
  const quantity = event.target.value;
  if(quantity === '' || quantity === '1')
    event.target.value = '2';
}