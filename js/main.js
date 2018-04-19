$('video').mediaelementplayer({
    features: ['playpause','current', 'progress', 'duration', 'volume', 'fullscreen'],
    startLanguage: 'en',
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

  //Click text goes to current time

  for(let i = 0; i < span.length; i++) {
    span[i].addEventListener('click', (event) => {
      video.currentTime = event.target.getAttribute('data-start');
      video.play();
    });
  }
