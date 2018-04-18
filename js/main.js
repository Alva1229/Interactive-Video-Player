$('video, audio').mediaelementplayer({
    features: ['playpause', 'progress', 'volume', 'fullscreen'],
    startLanguage: 'en',
    skipBackInterval: 4
  });

  const video = document.getElementById('myVideo');
  const span = document.getElementsByTagName('span');


  video.addEventListener('timeupdate', () => {
    for (let i = 0; i < span.length; i++) {
      let startTime = span[i].getAttribute('data-start');
      let endTime = span[i].getAttribute('data-end');
      let currentTime = video.currentTime;
      if (currentTime > startTime && currentTime < endTime) {
        span[i].style.color = "#FFA500";
      } 
      else {
        span[i].style.color ="#000000";
      }
    }
  });
