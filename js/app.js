// let events = [];
// let eventsRecord = [];
// // let isTransformation = [];
// let isTransformationCount  = 0;
// let isNotTransformationCount = 0;
// let getTransformationDays = [];
// let getNoneTransformationDays= [];
// let weekDays = [
//     'monday' , 'tuesday' , 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
// ];


// const Lycanjournal = function (day){

//     this.day = day;

//     this.getEvent = ()=>{

//        do{

//             let event = prompt("Please input event: ");

//             if (event === null || event === "") {
//                 alert("Please input an event.");

//             } else if (event === "stop") {
//                 break;

//             } else{
//                 events.push(event);
//             }

//         }

//         while(true);

//         return this;

//     };


//     this.getTransformationDeterminer = ()=>{

//         let str = events.includes('fullmoon');

//         if(str === true){

//             console.log(`transformed into a werewolf on ${this.day}`);

//             isTransformationCount++;

//             getTransformationDays.push(this.day)
            

//         }else{

//             console.log(`no transformations occurred on ${this.day}`);

//             isNotTransformationCount++;

//             getNoneTransformationDays.push(this.day);
//         }

//     }

// };


// // looping through the days of the week
// for (let index = 0; index < weekDays.length; index++) {

//     weekDays[index] = new Journal(`Day ${index + 1}`);
// };

// for (let index = 0; index < weekDays.length; i++) {
//     alert(("Let's begin... Kindly enter the events of " + weekDays[index].day + " (TYPE 'end' WHEN YOU'RE DONE)"));

//     weekDays[index].getEvent().getTransformationDeterminer();

//     // recordOfDailyEvents.splice(0, 0, dailyEvents);
//     events = [];

//     let carryOn = prompt("Would you like to progress to the next day? (Enter'yes or 'no' )");

//     if (carryOn == "yes") {
//         console.log("-----------------------------------------------------------");

//     } else if (carryOn == "no" || carryOn == null) {
//         break;
//     }
// }

// //This will show the number of days transformation occurred or not
// console.log("-----------------------------------------------------------");
// console.log("-----------------------------------------------------------");
// console.log("No. OF TRANSFORMATIONS: " + isTransformationCount);
// console.log("Days: ", getTransformationDays);

// console.log("-----------------------------------------------------------");
// console.log("No. OF DAYS WITHOUT TRANSFORMATION: " + isNotTransformationCount);
// console.log("Days: ", getNoneTransformationDays);


const cardHeaderIcon = document.querySelectorAll('.card-header img');

console.log(cardHeaderIcon);

Array.from(cardHeaderIcon).forEach(icon=>{

    icon.addEventListener('click', (e)=>{

        e.target.parentElement.previousElementSibling.classList.toggle('active');
    })
})