import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

console.log(currentTime);

const player = new Player('vimeo-player');

const onPlay = function() {
    console.log('played the video!');
};
player.on('play', onPlay);

function onTimeUpdate(evt) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(evt));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(currentTime.seconds)
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });