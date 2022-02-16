import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player('vimeo-player', { width: 640 });

player
  .setCurrentTime(getTimeLocalStorage())
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        {
          console.log(error.name);
        }
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(({ seconds }) => setTimeLocalStorage(seconds), 1000),
);

function setTimeLocalStorage(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

function getTimeLocalStorage() {
  try {
    return localStorage.getItem('videoplayer-current-time');
  } catch (error) {
    return 0;
  }
}
