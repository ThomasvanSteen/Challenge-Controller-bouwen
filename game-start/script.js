const carIcon1 = document.getElementById('car-icon-1');
let carPosition1 = 0;
const raceTrack1 = document.querySelector('.race-track:nth-child(1)');

document.addEventListener('keyup', (event) => {
  // if (event.code === 'ArrowLeft') {
  //   carPosition1 -= 10; // Move car 1 to the left by 10 pixels
  // } else 
  if (event.code === 'ArrowRight') {
    carPosition1 += 10; // Move car 1 to the right by 10 pixels
  }

  carIcon1.style.left = `${carPosition1}px`;

  if (carPosition1 >= 450) {
    alert('Red Won!');
    carPosition1 = 0
    carPosition2 = 0
  }
});

const carIcon2 = document.getElementById('car-icon-2');
let carPosition2 = 0;
const raceTrack2 = document.querySelector('.race-track:nth-child(2)');

document.addEventListener('keyup', (event) => {
  // if (event.code === 'KeyA') {
  //   carPosition2 -= 10; // Move car 1 to the left by 10 pixels
  // } else 
  if (event.code === 'KeyD') {
    carPosition2 += 10; // Move car 1 to the right by 10 pixels
  }

  carIcon2.style.left = `${carPosition2}px`;

  if (carPosition2 >= 450) {
    alert('Blue Won!');
    carPosition1 = 0
    carPosition2 = 0
  }
});

console.log(raceTrack1.offsetWidth)
