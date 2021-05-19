const sauceLink = document.querySelector('a');
const saucePlaceholder = document.querySelector('h1');
const btn = document.querySelector('button');

function randomSauce(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener('click', () => {
  const sauce = randomSauce(1, 359619);
  sauceLink.innerText = 'Go to sauce';
  sauceLink.href = `https://nhentai.net/g/${sauce}`;
  saucePlaceholder.innerText = `Sauce: ${sauce}`;
});
