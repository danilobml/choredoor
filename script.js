const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
const startButton = document.querySelector("#start");
let currentlyPlaying = true;

doorImage1.onclick = () => {
  if (isClicked(doorImage1) && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if (isClicked(doorImage2) && currentlyPlaying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if (isClicked(doorImage3) && currentlyPlaying === true){
      doorImage3.src = openDoor3;
      playDoor(doorImage3);
  }
};
startButton.onclick = () => {
  if (!currentlyPlaying)
  startRound();
}
const startRound = () => {
  doorImage1.src = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  doorImage2.src = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  doorImage3.src = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator()
}
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?"
  } else {
    startButton.innerHTML = "Game over! Play again?"
    currentlyPlaying = false;
  }
}
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}
randomChoreDoorGenerator ();
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};
const isClicked = (door) => {
  if (door === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}; 
const playDoor = (door) => {
  numClosedDoors--;
    if (isBot(door) === true && numClosedDoors> 0) {
      gameOver();
    } else if (numClosedDoors === 0) {
    gameOver('win');
  } 
}