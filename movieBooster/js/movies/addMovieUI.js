import {Movie} from "./movie.js"
import {MovieService} from "../models/movieModel.js"


class AddMovie {
   movie;
   movieService;
   // nameMovieUI = document.querySelector('#name-movie').value;
   // categoryUI = document.querySelector('#category-select').value;
   // classificationUI = document.querySelector('#classification-select').value;
   // imagenMovieUI = document.querySelector('#img-movie').value;
   // synopsisMovieUI = document.querySelector('#synopsis-movie').value;
   btnSubmit = document.querySelector('#btn-submit');
   // seleccionamos la etiqueta form para poder hacer uso de todos los datos del formulario
   formUI = document.querySelector('#movieForm');
   constructor(){
      this.movieService = new MovieService();
      this.initEvent();
   }
   
   creatMovie(){
      // la palabra reservada new FormData() sirve para compilar datos clave/valor 
      // en este caso recividos en parametro FormData(this.formUI) el formulario HTML completo
      const formData = new FormData(this.formUI);
      this.movie = new Movie({
         // FormData.get('') obtiene el valor indicado mediante el atributo nombre del HTML
         titulo: formData.get('name'),
         subtitulo: formData.get('subname'),
         categoria: formData.get('category-select'),
         clasificacion: formData.get('classification-select'),
         poster: formData.get('poster-movie'),
         sinopsis: formData.get('synopsis-movie'),
      });
      // en la sig instruccion se envia el FormData completo, para su uso en PHP
      this.movieService.store(formData);
   }

   initEvent(){
      this.formUI.addEventListener('submit', (e) => {
         e.preventDefault();
         this.creatMovie();
      })
   }
}

const pelicula = new AddMovie()


