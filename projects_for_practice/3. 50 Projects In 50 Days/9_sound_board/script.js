const sounds = ['win', 'break', 'fon', 'lose', 'start'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').append(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
