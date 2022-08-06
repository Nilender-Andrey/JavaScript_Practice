const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const res = await fetch(
    'https://geek-jokes.sameerkumar.website/api?format=json',
  );
  const data = await res.json();
  jokeEl.textContent = data.joke;
}

/* 
function generateJoke() {
  fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then((res) => res.json())
    .then((data) => {
      jokeEl.textContent = data.joke;
    });
}
 */
