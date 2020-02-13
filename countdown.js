

let chronos = [];
let index = 0;

let countdown = () => {
  if(chronos.length > 0){
    for(let i=0; i < chronos.length; i++){
      if(chronos[i].active && !! chronos[i].active){
        chronos[i].seconds -= 1;

        if(chronos[i].seconds <= 0){
          chronos[i].active = false;
        }

        displayTimers(i, chronos[i].seconds);
      }
    }
  }
}

let displayTimers = (index, seconds) => {
  let input = document.querySelector('#time1[data-index="'+index+'"]');
  input.value = formatTime(seconds)
}

let formatTime = totalSeconds => {
  let h = Math.floor(totalSeconds/3600);
  totalSeconds %= 3600;
  let m = Math.floor(totalSeconds/60);
  totalSeconds %= 60;
  let s = totalSeconds;

  return twoDigits(h)+':'+twoDigits(m)+':'+twoDigits(s);
}

let convertTime = (string) => {
  time = string.split(":");
  if(time.length == 3){
    return parseInt(time[0])*3600+parseInt(time[1])*60+parseInt(time[2]);
  } else if(time.length == 2){
    return parseInt(time[0])*60+parseInt(time[1]);
  } else {
    return parseInt(time[0]);
  }
}

let twoDigits = (digit) => {
  if(digit < 10){
    return "0"+digit;
  } else {
    return digit.toString();
  }
}

const newTimer1 = () => {

  let input = document.querySelector('input#time1');
  let button = document.querySelector('button#button1');

  input.setAttribute('data-index', index);
  input.setAttribute('placeholder', '00:00:00');

  button.setAttribute('data-index', index);
  button.onclick = e => {
    let index = e.target.dataset['index'];
    log.innerHTML = "";
    if(!chronos[index]){
      chronos[index] = {};
    }

    if(!chronos[index].active){
      chronos[index].active = true;
      e.target.innerHTML = "Stop";
    } else {
      chronos[index].active = false;
      e.target.innerHTML = "Start";
    }

    chronos[index].seconds = convertTime(input.value);
  }

  index++;
};
newTimer1();
setInterval(countdown, 1000);


  // const getTimeRemaining = (endtime) => {
  //   let t = Date.parse(endtime) - Date.parse(new Date());
  //   let seconds = Math.floor((t / 1000) % 60);
  //   let minutes = Math.floor((t / 1000 / 60) % 60);
  //   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   let days = Math.floor(t / (1000 * 60 * 60 * 24));
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds
  //   };
  // }

  //  const initializeClock = (id, endtime) => {
  //   let clock = document.getElementById(id);
  //   let days = clock.querySelector('.days');
  //   let hours = clock.querySelector('.hours');
  //   let minutes = clock.querySelector('.minutes');
  //   let seconds = clock.querySelector('.seconds');

  //    const updateClock = () => {
  //     let t = getTimeRemaining(endtime)

  //     days.innerHTML = t.days;
  //     hours.innerHTML = ('0' + t.hours).slice(-2);
  //     minutes.innerHTML = ('0' + t.minutes).slice(-2);
  //     seconds.innerHTML = ('0' + t.seconds).slice(-2);
  //     tickAudio.play();

  //     // it is for the end, should add a feature

  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }
  //   }

  //   updateClock();
  //   let timeinterval = setInterval(updateClock, 1000);
  // }

  // let deadline = '06/08/2018 18:59:59';
  // const tickAudio = new Audio('beat.mp3');
  // initializeClock('clockdiv', deadline);

