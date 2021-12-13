    let eventType;
    let temperatureS;

function what2wear(event,temperature) {
    //event = event.toLowerCase();
    //temperature = temperature.toLowerCase();
    //eventType = eventType.toLowerCase();
    //temperatureS = temperatureS.toLowerCase();

    if (event === "Casual") {
    eventType = "Wear something comfy";
    } if (event === "Semi-Formal") {
            eventType = "a polo";
        } if (event === "Formal") {
            eventType = "a suit";
        }

        if (temperature < 54) {
            temperatureS = "a coat"
        } else if (temperature >=54 && temperature <=70) {
            temperatureS = "Wear a jacket"
        } else {
            temperatureS = "Wear no-jacket"
        }
   return eventType && temperatureS;     

   //or
   //return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear ${eventStyle} and ${tempStyle}`;

        
}
//console.log(what2wear(eventType));

module.exports = what2wear;