//Global variables 
var dailyEvents = [];
var recordOfDailyEvents = [];
var recordOfTransformationOutcomes = [];
var transformationCounter = 0;
var noTransformationCounter = 0;
var transformationDayGetters = [];
var noTransformationDayGetters = [];

//This will create blueprints for each day using a Journal Class
class Journal {
    constructor(dayId) {
        this.dayId = dayId;
    }

    getEvents() {
        while (true) {

            let eventCollector = prompt("Enter event: ", "");

            if (eventCollector === null || eventCollector === "") {
                alert("Please input an event.");
                continue;

            } else if (eventCollector === "end") {
                break;

            } else{
                dailyEvents.push(eventCollector);
            }
                
        }

        return this;
    }

    determineTransformation() {
        let toUpper = function (items) {
            return items.toUpperCase();
        };
        dailyEvents = dailyEvents.map(toUpper);

        let transformOrNot1 = dailyEvents.includes("WINE");
        let transformOrNot2 = dailyEvents.includes("WINES");

        if (transformOrNot1 === true || transformOrNot2 === true) {
            recordOfTransformationOutcomes.splice(0, 0, ("You transformed into a Werewolf on " + this.dayId + " because you drank Wine!"));
            transformationCounter++;
            transformationDayGetters.push(this.dayId);
        } else {
            recordOfTransformationOutcomes.splice(0, 0, ("You didn't transform into a Werewolf on " + this.dayId + "."));
            noTransformationCounter++;
            noTransformationDayGetters.push(this.dayId);
        }
    }
}


//This creates all fourteen days
let allDays = ["dayOne", "dayTwo", "dayThree", "dayFour", "dayFive", "daySix", "daySeven", "dayEight", "dayNine", "dayTen", "dayEleven", "dayTwelve", "dayThirteen", "dayFourteen", ];

//This creates objects for each day and gives them IDs
for (let i = 0; i < allDays.length; i++) {
    allDays[i] = new Journal(`Day ${i + 1}`)
};

//This loops through all days to get Jacques' event input then determines transformation
for (let i = 0; i < allDays.length; i++) {
    alert(("Let's begin... Kindly enter the events of " + allDays[i].dayId + " (TYPE 'end' WHEN YOU'RE DONE)"));

    allDays[i].getEvents().determineTransformation();

    recordOfDailyEvents.splice(0, 0, dailyEvents);
    dailyEvents = [];

    let continueQuery = prompt("Would you like to progress to the next day? (Enter a 'y' for yes or 'n' for no)");

    if (continueQuery == "y") {
        console.log("-----------------------------------------------------------");
        continue;
    } else if (continueQuery == "n" || continueQuery == null) {
        break;
    }
}

//This will display all transformation outcomes for each day
console.log("\n\n");
console.log("BELOW IS YOUR TRANSFORMATION TIMELINE:")
recordOfTransformationOutcomes.reverse();
recordOfDailyEvents.reverse();
for (let i = 0; i < recordOfTransformationOutcomes.length; i++) {
    console.log(recordOfTransformationOutcomes[i]);
    console.log("These are your activities: ", recordOfDailyEvents[i]);
    console.log("\n");
};

//This will show the number of days transformation occurred or not
console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------------");
console.log("No. OF TRANSFORMATIONS: " + transformationCounter);
console.log("Days: ", transformationDayGetters);

console.log("-----------------------------------------------------------");
console.log("No. OF DAYS WITHOUT TRANSFORMATION: " + noTransformationCounter);
console.log("Days: ", noTransformationDayGetters);