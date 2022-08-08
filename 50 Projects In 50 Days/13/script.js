const config = {
  times: 30,
  delayTime: 100,
};

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = '';
    });
    randomSelect();
  }
});
/* 
function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.textContent = tag;

    tagsEl.append(tagEl);
  });
}
 */

function createTags(input) {
  tagsEl.innerHTML = '';

  input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .forEach((tag) => {
      tag.trim();

      const tagEl = document.createElement('span');
      tagEl.classList.add('tag');
      tagEl.textContent = tag;

      tagsEl.append(tagEl);
    });
}

function randomSelect() {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, config.delayTime);
  }, config.delayTime);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, config.delayTime);
  }, config.times * config.delayTime);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  const index = Math.floor(Math.random() * tags.length);

  return tags[index];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
