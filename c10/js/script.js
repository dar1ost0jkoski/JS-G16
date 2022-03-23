// const str = "Hello World";
// console.log(str.toLowerCase());
// console.log(typeof str);

// const str2 = new String("Hello World");
// console.log(typeof str2);

// const movieOne = {
//     title: "West Side Story",
//     year: 2021,
//     director: "Steven Spielberg",
//     GetSummary: function () {
//         return `${this.title} was directed by ${this.director}, which was released in ${this.year}.`;
//     }
// };

// console.log(movieOne);

// const movieTwo = {
//     title: "The Hand of God",
//     year: 2021,
//     director: "Paolo Sorentino",
//     GetSummary: function () {
//         return `${this.title} was directed by ${this.director}, which was released in ${this.year}.`;
//     }
// }

// // console.log(movieOne.director);
// console.log(movieOne.GetSummary());
// console.log(movieTwo.GetSummary());

// function Movie(title, year, director, boxOffice) {
//     this.title = title;
//     this.year = year;
//     this.director = director;
//     this.boxOffice = boxOffice;

//     // this.GetSummary = function () {
//     //     return `${this.title} was directed by ${this.director}, which was released in ${this.year}.`;
//     // }
// }

// Movie.prototype.GetSummary = function () {
//     return `${this.title} was directed by ${this.director}, which was released in ${this.year}.`;
// }

// Movie.prototype.GetBoxOffice = function () {
//     return `${this.title} made ${this.boxOffice} at the box-office.`;
// }

// const MovieOne = new Movie("West Side Story", 2021, "Steven Spielberg", "$150m");
// const MovieTwo = new Movie("Hand of God", 2021, "Paolo Sorentino", "$20m");
// const MovieThree = new Movie("The Swimmer", 1964, "Frank Perry", "$9m");
// const MovieFour = new Movie("Mad Max", 2016, "George Miller", "$275m");

// console.log(MovieOne);
// console.log(MovieTwo);
// console.log(MovieThree.GetSummary());
// console.log(MovieFour.GetBoxOffice());

// ================================================================================================
// ================================================================================================
// CLASSES

// class User {
//     constructor(name, email, jobOcupation) {
//         this.name = name;
//         this.email = email;
//         this.jobOcupation = jobOcupation;
//     }

//     SayHello() {
//         return `${this.name} says hello.`;
//     };
// };

// const UserOne = new User("John Doe", "john.doe@gmail.com", "Software Engineer");
// const UserTwo = new User("Jane Smith", "hane.smith@gmail.com", "Professional Iceberg Mover");

// console.log("UserOne", UserOne);
// console.log("UserTwo", UserTwo);

// console.log(UserTwo.SayHello());
// console.log(UserOne.SayHello());

// class Car {
//     constructor(name, year, color) {
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }

//     GetName() {
//         return `This is a ${this.name}`;
//     }
// }

// class Model extends Car {
//     constructor(model, name, year, color) {
//         super(name, year, color);
//         this.model = model;
//     }

//     GetModel() {
//         return `${this.GetName()} ${this.model} released in ${this.year}.`;
//     }

//     GetColor() {
//         return `The color is ${this.color}.`;
//     }
// }

// const car1 = new Car("Nissan");
// const carTwo = new Model("Sunny", "Nissan", 2012, "red");
// const carThree = new Model("Florida", "Yugo", 1992, "white");
// const carFour = new Model("101", "Zastava", 2021, "black");

// // console.log(car1.GetName());
// // console.log(carTwo.GetModel());
// // console.log(carFour.GetModel());
// console.log(carThree.GetModel());
// console.log(carThree.GetColor());

// ================================================================================================
// ================================================================================================
// WebStorage

// localStorage

const input = document.querySelector("input");
const button = document.querySelector("button");
const reset_button = document.querySelector(".reset");
const result = document.querySelector("h2");

if(localStorage.getItem("name")) {
    result.innerHTML = localStorage.getItem("name");
} else {
    alert("You have to set a name first!");
}

button.addEventListener("click", function() {
   result.innerHTML = input.value;
   localStorage.setItem("name", input.value);
});

reset_button.addEventListener("click", function() {
   localStorage.removeItem("name");
   result.innerHTML = "";
});

// let user = {
//     name: "Pero Perovski",
//     age: 99999
// }

// localStorage.setItem("pero", JSON.stringify(user));

// let pero = JSON.parse(localStorage.getItem("pero"));
// console.log("pero", pero);
