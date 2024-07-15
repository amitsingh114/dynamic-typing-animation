const textarea = document.getElementById('user-input');
const container = document.querySelector('.container');
const text = `


*{
  padding: 0;
  margin: 0;
}

body{
  background: url("/bg.jpg");
  min-height: 100vh;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

#playArea{
  background: linear-gradient(rgb(147, 249, 147), rgb(249, 249, 142));
  width: 90vmin;
  height: 92vmin;
  border: 10px solid black;
  display: grid;
  grid-template-rows: repeat(18, 1fr);
  grid-template-columns: repeat(18, 1fr);
}

.snake{
  background-color: purple;
}

.food{
  background-color: yellow;
}

.head{
  background-color: red;
}

#scorebox{
  position: absolute;
  top: 10px;
  right: 180px;
  font-size: 39px;
  font-weight: bold;
}

#hiscorebox{
  position: absolute;
  top: 65px;
  right: 130px;
  font-size: 39px;
  font-weight: bold;
}

`;

let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        textarea.value += text.charAt(charIndex);
        charIndex++;
        textarea.scrollTop = textarea.scrollHeight; // Add this line to keep the scrollbar at the bottom
        setTimeout(type, 20); // Adjust typing speed here (in milliseconds)
    } else {
        container.classList.add('visible');
    }
}

type();
