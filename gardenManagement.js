const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

let sprinklers = "null"
let lights = "null"

if (temperature > 80) {
    let sprinklers = "Watering on";
    console.log (sprinklers)
} else {
    let sprinklers = "Watering off";
    console.log (sprinklers)
}

if (timeOfDay === "morning") {
    let lights = "Lights on";
    console.log (lights)
} else {
    let lights = "Lights off";
    console.log (lights)
}

while (soilMoisture < 40) {
    soilMoisture += 5
    console.log (soilMoisture)
}
