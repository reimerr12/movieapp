const searchForm = document.querySelector('form');
const movieContainer = document.getElementById("movie-container");
const inputBox = document.getElementById("search-input");
const key = 'http://www.omdbapi.com/?i=tt3896198&apikey=6bc0317c';
const api = 'http://www.omdbapi.com/?apikey=[yourkey]&';


//add eventlistener
searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if(movieName!==''){
        getMovieInfo(movieName);
    }else{
        movieContainer.innerHTML="<h2>please enter a prompt</h2>";
    }
})

//fetch movie details
async function getMovieInfo(movie){
    const key = "6bc0317c";
    const url = `http://www.omdbapi.com/?apikey=${key}&t=${movie}`;

    const response = await fetch(url);
    const data =await response.json();

    showMovieData(data);
}

//getting movie data functions

function showMovieData(data){
    movieContainer.innerHTML = '';
    // use destructure properties from data object
    const {Title ,imdbRating ,Genre,Released,Runtime,Plot,Poster,Actors}=data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-element');
    movieElement.innerHTML = `<h2>${Title}</h2>
    <p><strong>Rating: &#11088;</strong>${imdbRating}</p>
    <p><strong>Release Date:</strong>${Released}</p>
    <p><strong>Duration:</strong>${Runtime}</p>
    <p><strong>Cast:</strong>${Actors}</p>
    <p><strong>Plot:</strong>${Plot}</p>
    `;

    //creating poster

    const moviePoster = document.createElement('div');
    moviePoster.classList.add("movie-poster");
    moviePoster.innerHTML = `<img src="${Poster}">`;

    const movieGenre = document.createElement('div');
    movieGenre.classList.add('movie-genre');

    Genre.split(",").forEach(element =>{
        const p =document.createElement('p');
        p.innerText = element;
        movieGenre.appendChild(p);
    });

    //appending childs to their parent elements
    movieElement.appendChild(movieGenre);
    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieElement);
}