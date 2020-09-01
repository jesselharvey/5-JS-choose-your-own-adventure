let fight = false
let esc = false
let strike = false
let fireball = false
let run = false
let swimming = false
let trophy = false
let pray = false
let forest = false
let shelter = false
let ride = false
let shack = false
let death = false

alert("You wake up in a cave, you see a monster.")
let intro = prompt(
  "Your sword is next to the beast, opposite to the entrance. Do you ESCAPE or FIGHT?"
)
if (intro == "fight") {
  alert("You choose to fight")
  fight = true
  esc = false
  console.log("fight path")
} else if (intro == "escape") {
  alert("You escape")
  esc = true
  fight = false
  console.log("escape path")
}
if (fight == true) {
  fight = prompt(
    "The beast guards your gear. You have enough energy to grab your weapon and STRIKE in a risky, single swift motion, or you can cast a FIREBALL."
  )
}
if (fight == "strike") {
  alert("With a brave blow the beast is slain.")
  strike = true
  fireball = false
} else if (fight == "fireball") {
  fireball = true
  strike = false
  death = true
  alert(
    "While charging your spell, the creature ferociously leaped towards you, swiping you away like a mere insect"
  )
}
if (strike == true) {
  strike = prompt(
    "With the creature dead, you can CLAIM the beasts' unique horn as a trophy or properly PRAY for it and leave it."
  )
}
if (strike == "claim") {
  trophy = true
  pray = false
  alert(
    "You attempt to cut the horn, but in your triumphance you don't hear the creature's children stalking you."
  )
  death = true
} else if (strike == "pray") {
  pray = true
  trophy = false
  alert("Disheartened by your necessary action, you pray for the beast.")
}
if (pray == true) {
  confirm(
    "You continue on your way, leaving this experience with a slight amount of karma"
  )
}
if (esc == true) {
  esc = prompt(
    "You exit to find an open field. Beast in tow, you must quickly RUN to the nearby forest, or escape by SWIMMING in the fast flowing river a few meters away."
  )
}
if (esc == "run") {
  alert("You run out of sight for just a minute.")
  run = true
  swimming = false
} else if (esc == "swimming") {
  alert("You trudge into the water, only to get swept by the rushing current")
  swimming = true
  run = false
}
if (run == true) {
  run = prompt(
    "You can take a gamble to go deeper into the FOREST, or attempt to seek SHELTER from a seemingly lone, occupied home."
  )
}
if (run == "forest") {
  alert("The forest is empathetic and senses your fatigue")
  forest = true
  shelter = false
} else if (run == "shelter") {
  alert("An elderly couple welcome you with food and bed for the night")
  shelter = true
  forest = false
}
if (forest == true) {
  confirm(
    "You feel the Earth rumble, building a tomb of roots around you. Oddly you awake to the early sun gleaming through the trees. You resume your journey"
  )
  shelter = false
}
if (shelter == true) {
  alert(
    "You awake to a sharp sting in your neck, only to fall back into sleep."
  )
  death = true
}
if (swimming == true) {
  swimming = prompt(
    "With a quick survey, you spot a river side SHACK that you can walk to once you escape the river. Or you can RIDE the seemingly endless river."
  )
}
if (swimming == "shack") {
  alert(
    "The shack appears to be abandoned yet well kept, with only a single note that reads 'Rest here and pay with cleanliness"
  )
  shack = true
  ride = false
  // even with prettier off, vvv this code always saves and makes another layer of parentheses.
} else if (swimming == "ride") {
  alert(
    "You hit your head on a rock, leaving your unconcious body to fall of a waterfall"
  )
  ride = true
  shack = false
  death = true
}
if (shack == true) {
  confirm(
    "You oblige the note. Waking up and cleaning your minor mess before you go on your way."
  )
}

if (death == true) {
  alert("You dead my guy.")
}
