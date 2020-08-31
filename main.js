let fight = false
let esc = false
let strike = false
let fireball = false
let run = false
let swim = false
let trophy = false
let pray = false
let forest = false
let shelter = false
let resume = false
let shack = false
let death = false

alert("You wake up in a cave, you see a monster.")
let intro = prompt(
  "Your sword is next to the beast, opposite to the entrance. Do you escape or fight?"
)
if (intro == "fight") {
  alert("You choose to fight")
  fight = true
  console.log("fight path")
} else if (intro == "escape") {
  alert("You escape")
  esc = true
  console.log("escape path")
}
if (fight == true) {
  fight = prompt(
    "The beast guards your gear. You have enough energy to grab your weapon and strike in a risky, single swift motion, or you can cast a fireball."
  )
}
if (fight == "strike") {
  alert("With a brave blow the beast is slain.")
  strike = true
} else if (fight == "fireball") {
  death = true
  alert(
    "While charging your spell, the creature ferociously leaped towards you, swiping you away like a mere insect"
  )
}
if (strike == true) {
  strike = prompt(
    "With the creature dead, you can claim the beasts' unique horn as a trophy or properly pray for it and leave it."
  )
}
if (strike == "trophy") {
  trophy = true
  alert(
    "You attempt to cut the horn, but in your triumphance you don't hear the creature's children stalking you."
  )
}
if (trophy == true) {
  death = true
}

if (esc == true) {
  prompt(
    "You exit to find an open field. Beast in tow, you must quickly run to the nearly impossible to see village, or escape with the fast flowing river a few meters away."
  )
}
// if (esc == run) {
//   alert()
// }

if (death == true) {
  alert("You dead my guy.")
}
