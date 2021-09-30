let events = [];
let eventsRecord = [];
let isTransformationCount  = 0;
let isNotTransformationCount = 0;
let getTransformationDays = [];
let getNoneTransformationDays= [];
let weekDays = [
    'monday' , 'tuesday' , 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
];


const Lycanjournal = function (day){

    this.day = day;

    this.getEvent = ()=>{

       do{

            let event = prompt("Please input event: ");

            if (event === null || event === "") {
                alert("Please input an event.");

            } else if (event === "stop") {
                break;

            } else{
                events.push(event);
            }

        }

        while(true);

        return this;

    };


    this.getTransformationDeterminer = ()=>{

        let str = events.includes('fullmoon');

        if(str === true){

            console.log(`transformed into a werewolf on ${this.day}`);

            isTransformationCount++;

            getTransformationDays.push(this.day);
            

        }else{

            console.log(`no transformations occurred on ${this.day}`);

            isNotTransformationCount++;

            getNoneTransformationDays.push(this.day);
        }

    }

};


// looping through the days of the week
for (let index = 0; index < weekDays.length; index++) {

    weekDays[index] = new Lycanjournal(`Day ${index + 1}`);
};

for (let index = 0; index < weekDays.length; index++) {
    alert(("Let's begin... Please enter the events of " + weekDays[index].day + " and type 'stop' when you are done"));

    weekDays[index].getEvent().getTransformationDeterminer();

    events = [];

    let carryOn = prompt("Would you like to continue to the next day? 'yes or 'no' ");

    if (carryOn == "yes") {
        console.log('\n');

    } else if (carryOn == "no" || carryOn == null) {
        break;
    }
}

//This will show the number of days transformation occurred or not
console.log('\n');
console.log('\n');
console.log("Number of times transformed: " + isTransformationCount);
console.log("Days: ", getTransformationDays);

console.log('\n');
console.log("Number of times without transformation: " + isNotTransformationCount);
console.log("Days: ", getNoneTransformationDays);