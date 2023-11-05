const MAX_FONT_SIZE_PX = 600;
const MAX_AVAILABLE_SPACE_FILLED = .6;

const container = document.querySelector('.container');
const text = document.querySelector('.text');

let containerWidth, containerHeight;
function resize() {
  text.classList.remove('show');
  const containerRect = container.getBoundingClientRect();
  containerWidth = containerRect.width;
  containerHeight = containerRect.height;
  for (let i = 2; i <= MAX_FONT_SIZE_PX; ++i) {
    text.style.fontSize = `${i}px`;
    const textRect = text.getBoundingClientRect();
    if (
    textRect.width > containerWidth * MAX_AVAILABLE_SPACE_FILLED ||
    textRect.height > containerHeight * MAX_AVAILABLE_SPACE_FILLED)
    {
      text.style.fontSize = `${i - 1}px`;
      break;
    }
  }
  text.classList.add('show');
}

const spans = text.textContent.split('').
filter(char => !char.match(/\s/)).
map(char => {
  const span = document.createElement('span');
  span.textContent = char;
  return span;
});
text.replaceChildren(...spans);

function move(e) {
  spans.forEach(span => {
    const dX = Math.abs(e.clientX - span.getBoundingClientRect().left);
    const newWeight = 100 + (1 - dX / containerWidth) * 800;
    span.style.setProperty('--weight', newWeight);
  });
}

document.addEventListener('touchmove', e => move(e.touches[0]));
document.addEventListener('mousemove', move);
window.addEventListener('resize', resize);
resize();