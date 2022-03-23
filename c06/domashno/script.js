var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Movie List"));
h1.innerHTML = "Movie List";
h1.style.textAlign = "center";

var _body = document.body;
_body.prepend(h1);


let mov_btn = document.querySelector(".tbl-btn");
mov_btn.style.textAlign = "center";
mov_btn.style.border = "2px solid black";
mov_btn.style.backgroundColor = "lightgrey";

let movies = [ 
    {
        movieTitle: "Dune",
        year: 2021,
        runningTime: "2h35min",
        genre: ["adventure", "sci-fi"],
        cast: ["Timothee Chalamet", "Zendaya", "Oscar Isaac"],
    },
    {
        movieTitle: "Avengers: Endgame",
        year: 2019,
        runningTime: "3h02min",
        genre: ["action", "sci-fi"],
        cast: ["Chris Hemsworth", "Robert Downey Jr.", "Chris Evans"],
    },
    {
        movieTitle: "Citizen Kane",
        year: 1941,
        runningTime: "1h59min",
        genre: ["drama", "mystery"],
        cast: ["Orson Welles", "Joseph Cotten", "Agnes Moorehead"],
    },
    {
        movieTitle: "The Matrix",
        year: 1999,
        runningTime: "2h28min",
        genre: ["action", "sci-fi"],
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie Ann Moss"],
    },
    {
        movieTitle: "V for Vendetta",
        year: 2005,
        runningTime: "2h12min",
        genre: ["action", "thriller"],
        cast: ["Hugo Weaving", "Natalie Portman", "John Hurt"],
    },
    {
        movieTitle: "Watchmen",
        year: 2009,
        runningTime: "2h43min",
        genre: ["action", "sci-fi"],
        cast: ["Malin Akerman", "Patrick Wilson", "Jackie Earle Haley"],
    },
    {
        movieTitle: "Zodiac",
        year: 2007,
        runningTime: "2h37min",
        genre: ["mystery", "thriller"],
        cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."],
    },
    {
        movieTitle: "Se7en",
        year: 1995,
        runningTime: "2h07min",
        genre: ["crime", "drama"],
        cast: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
    }
];

let headers = ["Title", "Year Made", "Runtime", "Genre", "Cast"];

mov_btn.addEventListener('click', () => {
    let table = document.createElement("table");
    table.style.border = "3px double black";
    table.style.borderCollapse = "collapse";
    table.style.backgroundColor = "lightblue";
    table.style.margin = "auto";

    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        let header = document.createElement("th");
        header.style.border = "1px solid black";
        header.style.backgroundColor = "yellow";
        header.style.padding = "10px 10px";
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    movies.forEach(movie => {
        let row = document.createElement("tr");
        row.style.border = "1px solid black";
        
        
        Object.values(movie).forEach(text => {
            let cell = document.createElement("td");
            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell.style.padding = "10px 10px";
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            
        })

        table.appendChild(row);

    });
   
    _body.appendChild(table);

});