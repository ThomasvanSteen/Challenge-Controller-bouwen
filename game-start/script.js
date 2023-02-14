// const carIcon1 = document.getElementById('car-icon-1');
// let carPosition1 = 0;

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'ArrowLeft') {
//     carPosition1 -= 10; // Move car 1 to the left by 10 pixels
//   } else if (event.code === 'ArrowRight') {
//     carPosition1 += 10; // Move car 1 to the right by 10 pixels
//   }

//   carIcon1.style.left = `${carPosition1}px`;
// });

// const carIcon2 = document.getElementById('car-icon-2');
// let carPosition2 = 0;

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'KeyA') {
//     carPosition2 -= 10; // Move car 2 to the left by 10 pixels
//   } else if (event.code === 'KeyD') {
//     carPosition2 += 10; // Move car 2 to the right by 10 pixels
//   }

//   carIcon2.style.left = `${carPosition2}px`;
// });

// const raceTrack1 = document.querySelector('.race-track:nth-child(1)');
// const raceTrack2 = document.querySelector('.race-track:nth-child(2)');

// // add these lines inside the keydown event listener for each car
// if (carIcon1.offsetLeft >= raceTrack1.offsetWidth) {
//   // car 1 has crossed the finish line
//   new Notification('Car 1 has crossed the finish line!');
// }

// if (carIcon2.offsetLeft >= raceTrack2.offsetWidth) {
//   // car 2 has crossed the finish line
//   new Notification('Car 2 has crossed the finish line!');
// }

const carIcon1 = document.getElementById('car-icon-1');
let carPosition1 = 0;
const raceTrack1 = document.querySelector('.race-track:nth-child(1)');

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    carPosition1 -= 10; // Move car 1 to the left by 10 pixels
  } else if (event.code === 'ArrowRight') {
    carPosition1 += 10; // Move car 1 to the right by 10 pixels
  }

  carIcon1.style.left = `${carPosition1}px`;

  if (carPosition1 > raceTrack1.offsetWidth) {
    alert('Car 1 crossed the finish line!');
  }
});

const carIcon2 = document.getElementById('car-icon-2');
let carPosition2 = 0;
const raceTrack2 = document.querySelector('.race-track:nth-child(2)');

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyA') {
    carPosition2 -= 10; // Move car 1 to the left by 10 pixels
  } else if (event.code === 'KeyD') {
    carPosition2 += 10; // Move car 1 to the right by 10 pixels
  }

  carIcon2.style.left = `${carPosition2}px`;

  if (carPosition2 > raceTrack2.offsetWidth) {
    alert('Car 2 crossed the finish line!');
  }
});

