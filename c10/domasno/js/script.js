const btn = document.querySelector(`#greeting-text`);

const fetchApi = async function(){
    try{
        const res = await fetch(`https://codeyourfuture.herokuapp.com/api/greetings`);
        const data = await res.text();
        console.log(`A greeting in a random language:${data}`);
        
    } catch (e){
        console.log(`Error`,e);
    }
};

btn.addEventListener(`click`,fetchApi);

/////////////////////////////////////////////////////////////////////

const btnDog = document.querySelector(`#dog`)
const modal = document.querySelector(`#modal`);


const fetchDog = async function(){
    try{
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
        const picture = await res.json();
        const dogImg = document.createElement(`img`);
        dogImg.src = picture.message;
        dogImg.classList.add(`imgHeightWidht`);
        modal.appendChild(dogImg)
    } catch (e){
        console.error(`Error`,e)
    }
    
}
btnDog.addEventListener(`click`,fetchDog);

////////////
////////////

const people = [
    {
      name: "Sashe",
      yearOfBirth: 1850,
      yearOfDeath: 1950,
    },
    {
      name: "Klime",
      yearOfBirth: 1932,
      yearOfDeath: 2021,
    },
    {
      name: "Stefan",
      yearOfBirth: 1923,
      yearOfDeath: 1950,
    },
  ];

let oldestPerson
let num = 0;

const olderPerson = function(){
    people.forEach(function(p){
        const lifespans = p.yearOfDeath - p.yearOfBirth;
        if ( num < lifespans){
            num = lifespans;
            oldestPerson = p;
        }
        
    })
    console.log(`The oldest person is ${num} years old and thats is ${oldestPerson.name}`)
};

olderPerson();