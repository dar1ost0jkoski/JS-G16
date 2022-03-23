//###########################################################################
//###########################################################################
// If statement

// if (condition) {
//     //piece of code that will be executed
// }

// if (8 > 6) {
//     console.log("Yes, eight is larger than six");
// }

// var num_a = 40;
// var num_b = 40;

// if(num_a < num_b) {
//     console.log(`${num_a} is smaller than ${num_b}`);
// } else {
//     console.log(`${num_a} is larger than ${num_b}`);
// }

// if (num_a < num_b) {
//     console.log(`${num_a} is smaller than ${num_b}`);
// } else if (num_a > num_b) {
//     console.log(`${num_a} is larger than ${num_b}`);
// } else {
//     console.log(`${num_a} is equal to ${num_b}`);
// }

// var height = 183;
// var allowed_height = 160;

// if(height >= allowed_height) {    
//     console.log("You're allowed to ride on the rollercoaster.");
// } else if (height <= allowed_height) {
//     console.log("You're NOT allowed to ride on the rollercoaster. Go away.");
// } else {
//     console.log("Unknown type or number. Try again.");
// }

// = -> set value
// == -> value equal to
// === -> value & type equal to

// var name = "Petar";
// var other_name = "Mario";

// if(name === other_name) {
//     console.log("The names are the same.");
// } else {
//     console.log("The names are different.");
// }

// &&and
// if (name === "Mario" && name.length === 5) {
//     console.log("name", name);
// }

// ||or
// if (name === "Mario" || name.length === 5) {
//     console.log("name", name);
// }

// var day = prompt("What is the day today?");

// if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//     console.log(`${day} is a working day.`);
// } else if (day === "Saturday" || day === "Sunday") {
//     console.log(`${day} is a weekend day.`);
// } else {
//     console.log(`${day} is an unknown day.`);
// }

// var day = prompt("What is the day today?");

// switch (day) {
//     case "Monday":
//         console.log(`${day} is a working day.`);
//         break;
//     case "Tuesday":
//         console.log(`${day} is a working day.`);
//         break;
//     case "Wednesday":
//         console.log(`${day} is a working day.`);
//         break;
//     case "Thursday":
//         console.log(`${day} is a working day.`);
//         break;
//     case "Friday":
//         console.log(`${day} is a working day.`);
//         break;
//     case "Saturday":
//         console.log(`${day} is a weekend day.`);
//         break;
//     case "Sunday":
//         console.log(`${day} is a weekend day.`);
//         break;
//     default:
//         console.log("Not a valid day.");
// }

// exercise
var weather = "cloudy";

switch (weather) {
    case "cloudy":
        console.log("Wear something that would warm you.");
        break;
    case "rainy":
        console.log("Don't forget to bring an umbrella.");
        break;
    case "sunny":
        console.log("Don't forget to bring sunscream.");
        break;
    default:
        console.log("Unknown weather type.");
}


// exercise
var number = 25;

switch (true) {
    case number > 0:
        console.log(`${number} is a positive number.`);
        break;
    case number === 0:
        console.log(`${number} is zero.`);
        break;
    case number < 0:
        console.log(`${number} is a negative number.`);
        break;
    default:
        console.log("Invalid number.");
}

// console.log("Number 25 is a positive number.");
// console.log("Number 0 is zero.");
// console.log("Number 25 is a negative number.");
// console.log("Number 25 is an invalid number.");

// parseInt();

// console.log(number > 0);
// console.log(number === 0);
// console.log(number < 0);

//Jazik vezhba
var langCode = "de";

if(langCode == "en") {
    console.log("English language")
} else if (langCode == "es") {
    console.log("Spanish language.")
} else if (langCode == "de") {
    console.log("Germanlanguage.")
} else {
    console.log("Unknown language.")
}

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Ocenka vezhba
var points = 60;

if (points <= 20) {
    console.log("F");
} else if (points <= 40 && points >= 21) {
    console.log("D");
} else if (points <= 60 && points >= 41) {
    console.log("C");
} else if (points <= 80 && points >= 61) {
    console.log("B");
} else if (points <= 100 && points >= 81) {
    console.log("A");
}

// Koj den vezhba
var day = prompt("What is the day today?");

if(day == "Monday"){
    console.log("Monday is a working day.")
} else if(day == "Tuesday") {
    console.log("Tuesday is a working day.");
} else if(day == "Wednesday") {
    console.log("Wednesday is a working day.");
} else if(day == "Thursday") {
    console.log("Thursday is a working day.");
} else if(day == "Friday") {
    console.log("Friday is a working day.");
} else if(day == "Saturday") {
    console.log("Saturday is a weekend.");
} else if(day == "Sunday") {
    console.log("Sunday is a weekend.");
} else {
    console.log("Not a valid day.");
}

//Switch

var day = prompt("What is the day today?");

switch(day) {
    case "Monday":
        console.log(`${day} is a working day.`);
        break;
    case "Tuesday":
        console.log(`${day} is a working day.`);
        break;
    case "Wednesday":  
        console.log(`${day} is a working day.`); break;
    case "Thursday":
        console.log(`${day} is a working day.`);
        break;
    case "Friday":
        console.log(`${day} is a working day.`);
        break;
    case "Saturday":  
        console.log(`${day} is the weekend.`);
        break;
    case "Sunday":
        console.log(`${day} is the weekend.`);
        break;
    default: console.log("Not a valid day.")
}

var weather = "cloudy | rainy | sunny | kire"

switch(weather) {
    case "cloudy":
        console.log("Wear something that would warm you");
        break;
    case "rainy":
        console.log("Wear something that would warm you");
        break;
    case "sunny":
        console.log("Wear something that would warm you");
        break;
    case "kire":
        console.log("Unknown weather type.");
        break;
}
