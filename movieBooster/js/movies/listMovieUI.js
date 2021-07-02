import {MovieService} from "../models/movieModel.js"

class moviesList {
   mainContainer = document.querySelector('#main-container');
   movieService = new MovieService()
   moviesList;
   constructor(){
      this.getMovies();
   }

   getMovies(){
      this.moviesList = this.movieService.all();
      this.printMovie();
   }

   printMovie(){
   this.mainContainer.innerHTML += `
      <div id="card-movie" class="card border-dark mb-3">
         <div class="card-header"><span id="title-movie">movie title</span><i class="favorite-btn bi bi-heart-fill"></i></div>
         <div class="card-body">
            <div id="img-movie">
               <img src="../../../amazing-spider-man-2012.jpg" alt="">
            </div>
            <span id="subtitulo" class="movie-data">subtitulo</span>
            <span class="movie-data clasificaion">clasificaion</span>
            <span class="movie-data genero">genero</span>
            <span class="movie-data">sinopsis</span>
            <p class="card-text sinopsis"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
      </div>
   `
}
}