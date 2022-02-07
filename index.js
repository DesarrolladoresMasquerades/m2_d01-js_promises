console.log("JS Loaded");
/* 
function standardCallback() {
  console.log("I have been run in the future on " + new Date());
}

console.log("Time now is" + new Date());
setTimeout(standardCallback, 3 * 1000);
console.log("Time after one line is " + new Date());

const magicButton = document.getElementById("magic-button");

magicButton.onclick = standardCallback;
 */

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];
/* 
const directionList = [];

function getDirections(step, returningCallback, errorCallback) {
  setTimeout(() => {
    console.log(directions[step]);
    directionList.push(directions[step]);
    if (!directions[step]) errorCallback("Instructions not found.");
    else returningCallback();
  }, 2000);
}

console.log(
  "First leg of the journey",
  getDirections(
    0,
    () =>
      getDirections(
        1,
        () =>
          getDirections(
            2,
            getDirections(
              3,
              () => {
                console.log("You arrived");
              },
              () => {}
            ),
            () => {}
          ),
        () => {}
      ),
    () => {
      console.log("There are no more steps");
    }
  )
);
 */

function obtainDirections(step) {
  return new Promise((resolvedCb, rejectedCb) => {
    setTimeout(() => {
      console.log(directions[step]);
      if (!directions[step]) rejectedCb("Instructions not found.");
      else resolvedCb();
    }, 3 * 1000);
  });
}

obtainDirections(0)
  .then(() => obtainDirections(1))
  .then(() => obtainDirections(2))
  .then(() => obtainDirections(3))
  .then(() => obtainDirections(1000));

const magicButton = document.getElementById("magic-button");

magicButton.onclick = handleMagicClick;

function handleMagicClick(event) {
  return obtainDirections(0)
    .then(() => obtainDirections(1))
    .then(() => obtainDirections(2))
    .then(() => obtainDirections(3));
}
