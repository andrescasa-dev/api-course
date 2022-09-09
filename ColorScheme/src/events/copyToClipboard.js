export default function copyToClipboard(event){
  const {target} = event
  target.select();
  document.execCommand('Copy');
}