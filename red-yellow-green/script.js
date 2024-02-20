function clickEventHandler() {
  let titleDiv = document.getElementById('title');  // get title element
  let message = '標題已經切換！';
  titleDiv.innerText = message;
  titleDiv.innerHTML = `<p>${message}</p>`;
  titleDiv.style.color = 'blue';
}
let changeButton = document.getElementById('changeButton');
changeButton.addEventListener("click", clickEventHandler);

const squares = document.querySelectorAll('.colorSquare');
const output = document.getElementById('output');
// forEach
squares.forEach(square => {
  square.onclick = () => {
    _id = square.getAttribute('id');
    output.innerHTML = `<div class=".colorSquare" id="${_id}">${_id}</div>`;
  }
})
